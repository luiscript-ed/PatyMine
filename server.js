require("dotenv").config();

const http = require("http");
const { randomUUID } = require("crypto");

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { Server } = require("socket.io");
const { pool, testarBanco } = require("./db");

const PORT = process.env.PORT || 3000;
const MAX_PLAYERS_PER_WORLD = 16;

// Estrutura vertical e horizontal dos chunks.
const CHUNK_SIZE = 16;
const WORLD_HEIGHT = 128;

// Limite de alterações por requisição.
const MAX_BLOCK_CHANGES_PER_BATCH = 128;

// Limite das coordenadas do mundo.
const MAX_WORLD_COORDINATE = 100000;

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("JWT_SECRET não foi configurada.");
}

// Aplicação HTTP
const app = express();

app.use(cors({
    origin: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json({
    limit: "10kb"
}));

// Servidor HTTP compartilhado com Socket.IO
const httpServer = http.createServer(app);

// Socket.IO
const io = new Server(httpServer, {
    cors: {
        origin: true,
        methods: ["GET", "POST"]
    },
    transports: ["websocket"]
});

// Mundos ativos em memória.
// Estrutura: Map<worldId, Map<socketId, player>>
const worlds = new Map();

function getWorld(worldId) {
    if (!worlds.has(worldId)) {
        worlds.set(worldId, new Map());
    }

    return worlds.get(worldId);
}

function sanitizeName(name) {
    if (typeof name !== "string") {
        return "Jogador";
    }

    return name.trim().slice(0, 20) || "Jogador";
}

function isValidWorldId(worldId) {

    return (
        typeof worldId === "string" &&
        UUID_REGEX.test(worldId)
    );

}


function leaveWorld(socket) {
    const worldId = socket.data.worldId;
    const userId = socket.data.user?.id;

    if (!worldId || !userId) {
        return;
    }

    const world = worlds.get(worldId);

    if (world) {
        const player = world.get(userId);

        // Só a conexão responsável pode remover o jogador.
        if (player?.socketId === socket.id) {
            world.delete(userId);

            socket.to(worldId).emit("player:left", {
                id: userId
            });
        }

        if (world.size === 0) {
            worlds.delete(worldId);
        }
    }

    socket.leave(worldId);
    socket.data.worldId = null;
}


function gerarToken(usuario) {
    return jwt.sign(
        {
            username: usuario.username
        },
        JWT_SECRET,
        {
            subject: usuario.id,
            expiresIn: "7d"
        }
    );
}

app.post("/api/auth/register", async (req, res) => {
    const username = typeof req.body?.username === "string"
        ? req.body.username.trim()
        : "";

    const email = typeof req.body?.email === "string"
        ? req.body.email.trim().toLowerCase()
        : "";

    const password = typeof req.body?.password === "string"
        ? req.body.password
        : "";

    // Validações
    if (username.length < 3 || username.length > 20) {
        return res.status(400).json({
            success: false,
            message: "O nome deve possuir entre 3 e 20 caracteres."
        });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({
            success: false,
            message: "E-mail inválido."
        });
    }

    if (
        password.length < 8 ||
        Buffer.byteLength(password, "utf8") > 72
    ) {
        return res.status(400).json({
            success: false,
            message: "A senha deve possuir entre 8 e 72 bytes."
        });
    }

    try {
        // Protege a senha
        const passwordHash = await bcrypt.hash(password, 12);

        // Cria a conta
        const resultado = await pool.query(
            `INSERT INTO users
            (id, username, email, password_hash)
            VALUES ($1, $2, $3, $4)
            RETURNING id, username, email`,
            [
                randomUUID(),
                username,
                email,
                passwordHash
            ]
        );

        const usuario = resultado.rows[0];

        // Gera o token
        const token = gerarToken(usuario);

        return res.status(201).json({
            success: true,
            message: "Conta criada com sucesso.",
            token,
            user: usuario
        });

    } catch (error) {
        if (error.code === "23505") {
            return res.status(409).json({
                success: false,
                message: "Este e-mail já está cadastrado."
            });
        }

        console.error("Erro no cadastro:", error);

        return res.status(500).json({
            success: false,
            message: "Erro interno ao criar a conta."
        });
    }
});

app.post("/api/auth/login", async (req, res) => {
    const email = typeof req.body?.email === "string"
        ? req.body.email.trim().toLowerCase()
        : "";

    const password = typeof req.body?.password === "string"
        ? req.body.password
        : "";

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Informe o e-mail e a senha."
        });
    }

    try {
        // Busca a conta
        const resultado = await pool.query(
            `SELECT id, username, email, password_hash
             FROM users
             WHERE email = $1
             LIMIT 1`,
            [email]
        );

        const usuario = resultado.rows[0];

        if (!usuario || !usuario.password_hash) {
            return res.status(401).json({
                success: false,
                message: "E-mail ou senha incorretos."
            });
        }

        // Verifica a senha
        const senhaValida = await bcrypt.compare(
            password,
            usuario.password_hash
        );

        if (!senhaValida) {
            return res.status(401).json({
                success: false,
                message: "E-mail ou senha incorretos."
            });
        }

        // Remove o hash da resposta
        const user = {
            id: usuario.id,
            username: usuario.username,
            email: usuario.email
        };

        const token = gerarToken(user);

        return res.json({
            success: true,
            message: "Login realizado com sucesso.",
            token,
            user
        });

    } catch (error) {
        console.error("Erro no login:", error);

        return res.status(500).json({
            success: false,
            message: "Erro interno ao realizar login."
        });
    }
});

// Conexões

io.use(async (socket, next) => {
    const token = socket.handshake.auth?.token;

    if (!token) {
        return next(new Error("AUTH_REQUIRED"));
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET);

        if (!payload.sub) {
            return next(new Error("INVALID_TOKEN"));
        }

        // Confirma que a conta ainda existe no banco.
        const resultado = await pool.query(
            `SELECT id, username
             FROM users
             WHERE id = $1
             LIMIT 1`,
            [payload.sub]
        );

        const usuario = resultado.rows[0];

        if (!usuario) {
            return next(new Error("INVALID_TOKEN"));
        }

        // Identidade autenticada da conexão.
        socket.data.user = {
            id: usuario.id,
            username: usuario.username
        };

        next();

    } catch (error) {
        if (
            error.name === "JsonWebTokenError" ||
            error.name === "TokenExpiredError"
        ) {
            return next(new Error("INVALID_TOKEN"));
        }

        console.error(
            "Erro ao autenticar conexão:",
            error
        );

        next(new Error("AUTH_UNAVAILABLE"));
    }
});

const UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;


// Obtém a identidade validada pelo middleware JWT.
// Nunca utiliza um user_id enviado pelo cliente.
function getAuthenticatedUserId(socket) {
    const authenticatedUser =
        socket.data?.user ??
        socket.user ??
        socket.data?.account ??
        {};

    const userId =
        authenticatedUser.id ??
        authenticatedUser.userId ??
        authenticatedUser.sub ??
        socket.data?.userId ??
        socket.userId;

    if (
        typeof userId !== "string" ||
        !UUID_REGEX.test(userId)
    ) {
        throw new Error("AUTH_REQUIRED");
    }

    return userId;
}


// Retorna erros sem expor detalhes internos do PostgreSQL.
function sendSocketError(ack, error, fallbackMessage) {
    console.error("Erro em evento de mundo:", error);

    if (typeof ack === "function") {
        ack({
            success: false,
            message: error.publicMessage || fallbackMessage
        });
    }
}


// Cria um erro de validação que pode ser retornado ao cliente.
function createRequestError(message) {
    const error = new Error(message);

    error.publicMessage = message;

    return error;
}


// Verifica se um valor é um objeto JSON válido.
function isPlainObject(value) {
    return (
        value !== null &&
        typeof value === "object" &&
        !Array.isArray(value)
    );
}

function publicPlayer(player) {
    const { socketId, ...publicData } = player;

    return publicData;
}

io.on("connection", (socket) => {

    console.log(`Jogador conectado: ${socket.id}`);

    socket.data.worldId = null;
    socket.data.lastMovement = 0;

    // Entrada em um mundo


    socket.on("world:join", async (data = {}, ack) => {

        try {

            const userId = getAuthenticatedUserId(socket);

            const worldId = data?.worldId;

            const playerName = sanitizeName(
                socket.data.user.username
            );


            // 1. Valida o UUID do mundo.

            if (!isValidWorldId(worldId)) {
                throw createRequestError(
                    "Identificador de mundo inválido."
                );
            }


            // 2. Verifica a existência do mundo e as permissões.

            const accessResult = await pool.query(
                `
                SELECT
                    w.id,
                    w.owner_id,
                    w.visibility,
                    w.max_players

                FROM worlds w

                WHERE
                    w.id = $1

                    AND (
                        w.owner_id = $2

                        OR w.visibility = 'public'

                        OR EXISTS (
                            SELECT 1
                            FROM world_members wm

                            WHERE
                                wm.world_id = w.id
                                AND wm.user_id = $2
                        )
                    )

                LIMIT 1
                `,
                [worldId, userId]
            );


            if (accessResult.rows.length === 0) {
                throw createRequestError(
                    "Mundo não encontrado ou você não possui acesso."
                );
            }


            const worldRecord = accessResult.rows[0];


            // 3. Evita entrar duas vezes na mesma sala.

            if (socket.data.worldId === worldId) {

                const currentWorld = worlds.get(worldId);

                const currentPlayer = currentWorld?.get(userId);

                if (currentPlayer?.socketId === socket.id) {

                    if (typeof ack === "function") {
                        ack({
                            success: true,
                            worldId,

                            players: Array.from(currentWorld.values())
                                .filter(other => other.id !== userId)
                                .map(publicPlayer)
                        });
                    }

                    return;
                }
            }


            // 4. Verifica se outra conexão da mesma conta
            // já está presente no mundo.

            const existingWorld = worlds.get(worldId);

            if (existingWorld?.has(userId)) {
                throw createRequestError(
                    "Esta conta já está conectada neste mundo."
                );
            }


            // 5. Determina o limite de jogadores.
            // O banco pode estabelecer um limite menor,
            // mas nunca ultrapassaremos 16 jogadores.

            const configuredLimit = Number(
                worldRecord.max_players
            );

            const worldLimit =
                Number.isInteger(configuredLimit) &&
                configuredLimit > 0

                    ? Math.min(
                        configuredLimit,
                        MAX_PLAYERS_PER_WORLD
                    )

                    : MAX_PLAYERS_PER_WORLD;


            if ((existingWorld?.size ?? 0) >= worldLimit) {
                throw createRequestError(
                    `Este mundo já atingiu o limite de ${worldLimit} jogadores.`
                );
            }


            // 6. Somente agora sai da sala anterior.
            // Assim, uma tentativa de entrada inválida
            // não desconecta o jogador do mundo atual.

            leaveWorld(socket);


            // 7. Recupera ou cria a estrutura em memória.

            const world = getWorld(worldId);


            // 8. Cria a representação do jogador.

            const player = {

                id: userId,

                name: playerName,

                // Identificação interna da conexão.
                socketId: socket.id,

                position: {
                    x: 0,
                    y: 0,
                    z: 0
                },

                rotation: {
                    yaw: 0,
                    pitch: 0
                }

            };


            // 9. Registra o jogador pelo UUID permanente.

            world.set(userId, player);


            // 10. Coloca a conexão na sala.

            socket.join(worldId);

            socket.data.worldId = worldId;


            // 11. Retorna os jogadores que já estavam na sala.

            if (typeof ack === "function") {
                ack({

                    success: true,

                    worldId,

                    players: Array.from(world.values())
                        .filter(other => other.id !== userId)
                        .map(publicPlayer)

                });
            }


            // 12. Notifica os demais participantes.

            socket.to(worldId).emit(
                "player:joined",
                publicPlayer(player)
            );


            console.log(
                `${playerName} (${userId}) entrou no mundo ${worldId} ` +
                `(${world.size}/${worldLimit})`
            );


        } catch (error) {

            sendSocketError(
                ack,
                error,
                "Não foi possível entrar neste mundo."
            );

        }

    });


    // Atualização da posição do jogador

    socket.on("player:move", (data) => {
        const worldId = socket.data.worldId;
        const userId = socket.data.user.id;

        if (!worldId) {
            return;
        }

        const world = worlds.get(worldId);
        const player = world?.get(userId);

        if (
            !player ||
            player.socketId !== socket.id ||
            !data
        ) {
            return;
        }

        // Limita a frequência das atualizações.
        const now = Date.now();

        if (now - socket.data.lastMovement < 50) {
            return;
        }

        socket.data.lastMovement = now;

        const position = data.position;
        const rotation = data.rotation;

        if (
            !position ||
            !rotation ||
            !Number.isFinite(position.x) ||
            !Number.isFinite(position.y) ||
            !Number.isFinite(position.z) ||
            !Number.isFinite(rotation.yaw) ||
            !Number.isFinite(rotation.pitch)
        ) {
            return;
        }

        const coordinates = [
            position.x,
            position.y,
            position.z
        ];

        if (coordinates.some(value => Math.abs(value) > 100000)) {
            return;
        }

        player.position = {
            x: position.x,
            y: position.y,
            z: position.z
        };

        player.rotation = {
            yaw: rotation.yaw,
            pitch: rotation.pitch
        };

        socket.to(worldId).emit("player:moved", {
            id: userId,
            position: player.position,
            rotation: player.rotation
        });
    });

    // Saída manual de um mundo
    socket.on("world:leave", () => {
        leaveWorld(socket);
    });
    

    socket.on("world:blocks:change", async (payload = {}, ack) => {

        let client;
        let transactionStarted = false;

        try {

            // 1. Recupera a identidade autenticada.

            const userId = getAuthenticatedUserId(socket);
            const worldId = payload?.worldId;


            if (!isValidWorldId(worldId)) {
                throw createRequestError(
                    "Identificador de mundo inválido."
                );
            }


            // 2. Verifica se o jogador está conectado ao mundo.

            if (socket.data.worldId !== worldId) {
                throw createRequestError(
                    "Você não está conectado a este mundo."
                );
            }

            const activeWorld = worlds.get(worldId);
            const activePlayer = activeWorld?.get(userId);

            if (
                !activePlayer ||
                activePlayer.socketId !== socket.id
            ) {
                throw createRequestError(
                    "Sessão de jogador inválida."
                );
            }


            // 3. Valida o lote recebido.

            if (
                !Array.isArray(payload.changes) ||
                payload.changes.length === 0 ||
                payload.changes.length > MAX_BLOCK_CHANGES_PER_BATCH
            ) {
                throw createRequestError(
                    "Quantidade de alterações inválida."
                );
            }


            // Elimina alterações repetidas na mesma posição.
            // A última alteração recebida prevalece.

            const changesByPosition = new Map();

            for (const change of payload.changes) {

                if (!isPlainObject(change)) {
                    throw createRequestError(
                        "Alteração de bloco inválida."
                    );
                }

                const x = change.x;
                const y = change.y;
                const z = change.z;

                const blockId = change.blockId;
                const meta = change.meta ?? 0;


                if (
                    ![
                        x,
                        y,
                        z,
                        blockId,
                        meta
                    ].every(Number.isSafeInteger)
                ) {
                    throw createRequestError(
                        "Coordenadas ou dados de bloco inválidos."
                    );
                }


                if (
                    Math.abs(x) > MAX_WORLD_COORDINATE ||
                    Math.abs(z) > MAX_WORLD_COORDINATE
                ) {
                    throw createRequestError(
                        "Coordenadas fora dos limites permitidos."
                    );
                }


                if (
                    y < 0 ||
                    y >= WORLD_HEIGHT ||
                    blockId < 0 ||
                    blockId > 255 ||
                    meta < 0 ||
                    meta > 255
                ) {
                    throw createRequestError(
                        "Dados de bloco fora dos limites permitidos."
                    );
                }


                const key = `${x},${y},${z}`;

                changesByPosition.set(key, {
                    x,
                    y,
                    z,
                    blockId,
                    meta
                });

            }


            const changes = Array.from(
                changesByPosition.values()
            );


            // 4. Agrupa as modificações por chunk.

            const chunkGroups = new Map();

            for (const change of changes) {

                const chunkX = Math.floor(
                    change.x / CHUNK_SIZE
                );

                const chunkZ = Math.floor(
                    change.z / CHUNK_SIZE
                );


                const localX =
                    change.x - chunkX * CHUNK_SIZE;

                const localZ =
                    change.z - chunkZ * CHUNK_SIZE;


                // Índice utilizado pelo motor Three.js.
                const index =
                    localX +
                    localZ * CHUNK_SIZE +
                    change.y * CHUNK_SIZE * CHUNK_SIZE;


                // Combina ID do bloco e metadados.
                const packedValue =
                    change.blockId |
                    (change.meta << 8);


                const key = `${chunkX},${chunkZ}`;

                let group = chunkGroups.get(key);

                if (!group) {

                    group = {
                        chunkX,
                        chunkZ,
                        values: new Map()
                    };

                    chunkGroups.set(key, group);

                }


                group.values.set(index, packedValue);

            }


            // 5. Abre uma transação PostgreSQL.

            client = await pool.connect();

            await client.query("BEGIN");

            transactionStarted = true;


            // 6. Confirma novamente a autorização.
            // Protege contra operações após a revogação do acesso.

            const accessResult = await client.query(
                `
                SELECT w.id

                FROM worlds w

                WHERE
                    w.id = $1

                    AND (
                        w.owner_id = $2

                        OR w.visibility = 'public'

                        OR EXISTS (
                            SELECT 1
                            FROM world_members wm

                            WHERE
                                wm.world_id = w.id
                                AND wm.user_id = $2
                        )
                    )

                FOR SHARE OF w
                `,
                [worldId, userId]
            );


            if (accessResult.rows.length === 0) {
                throw createRequestError(
                    "Você não possui autorização para modificar este mundo."
                );
            }


            // 7. Ordena os chunks para manter uma ordem
            // consistente de bloqueio entre transações.

            const orderedGroups = Array.from(
                chunkGroups.values()
            ).sort((a, b) =>
                a.chunkX - b.chunkX ||
                a.chunkZ - b.chunkZ
            );


            // 8. Processa cada chunk individualmente.

            for (const group of orderedGroups) {

                const { chunkX, chunkZ } = group;


                // Cria o registro caso ainda não exista.
                // A chave primária evita duplicações.

                await client.query(
                    `
                    INSERT INTO world_chunks (
                        world_id,
                        chunk_x,
                        chunk_y,
                        chunk_z,
                        chunk_data
                    )

                    VALUES (
                        $1,
                        $2,
                        0,
                        $3,
                        '[]'::jsonb
                    )

                    ON CONFLICT (
                        world_id,
                        chunk_x,
                        chunk_y,
                        chunk_z
                    )

                    DO NOTHING
                    `,
                    [
                        worldId,
                        chunkX,
                        chunkZ
                    ]
                );


                // Bloqueia a linha durante a atualização.
                // Isso protege alterações simultâneas.

                const chunkResult = await client.query(
                    `
                    SELECT chunk_data

                    FROM world_chunks

                    WHERE
                        world_id = $1
                        AND chunk_x = $2
                        AND chunk_y = 0
                        AND chunk_z = $3

                    FOR UPDATE
                    `,
                    [
                        worldId,
                        chunkX,
                        chunkZ
                    ]
                );


                const storedData =
                    chunkResult.rows[0]?.chunk_data;


                if (!Array.isArray(storedData)) {
                    throw new Error(
                        "Formato de chunk inválido no PostgreSQL."
                    );
                }


                // Recupera as modificações já existentes.

                const modifications = new Map();

                for (const entry of storedData) {

                    if (
                        !Array.isArray(entry) ||
                        entry.length !== 2 ||
                        !Number.isSafeInteger(entry[0]) ||
                        !Number.isSafeInteger(entry[1]) ||
                        entry[0] < 0 ||
                        entry[0] >= CHUNK_SIZE * CHUNK_SIZE * WORLD_HEIGHT ||
                        entry[1] < 0 ||
                        entry[1] > 65535
                    ) {
                        throw new Error(
                            "Dados de chunk corrompidos no PostgreSQL."
                        );
                    }

                    modifications.set(
                        entry[0],
                        entry[1]
                    );

                }


                // Aplica somente as alterações recebidas.
                // Não sobrescreve as demais construções.

                for (const [index, packedValue] of group.values) {

                    modifications.set(
                        index,
                        packedValue
                    );

                }


                // Serializa novamente no formato original:
                // [[indice, valor], [indice, valor], ...]

                const chunkData = Array.from(
                    modifications.entries()
                ).sort((a, b) => a[0] - b[0]);


                await client.query(
                    `
                    UPDATE world_chunks

                    SET
                        chunk_data = $5::jsonb,
                        updated_at = NOW()

                    WHERE
                        world_id = $1
                        AND chunk_x = $2
                        AND chunk_y = $3
                        AND chunk_z = $4
                    `,
                    [
                        worldId,
                        chunkX,
                        0,
                        chunkZ,
                        JSON.stringify(chunkData)
                    ]
                );

            }


            // 9. Atualiza a data de modificação do mundo.

            await client.query(
                `
                UPDATE worlds

                SET updated_at = NOW()

                WHERE id = $1
                `,
                [worldId]
            );


            // 10. Confirma a transação.

            await client.query("COMMIT");

            transactionStarted = false;


            // 11. Transmite somente depois da gravação.
            // O próprio remetente não recebe a transmissão.

            socket.to(worldId).emit(
                "world:blocks:changed",
                {
                    worldId,
                    changes
                }
            );


            if (typeof ack === "function") {

                ack({
                    success: true,
                    saved: changes.length
                });

            }


            console.log(
                `Blocos salvos: ${changes.length} | Mundo: ${worldId}`
            );


        } catch (error) {

            if (client && transactionStarted) {

                try {

                    await client.query("ROLLBACK");

                } catch (rollbackError) {

                    console.error(
                        "Erro no rollback dos chunks:",
                        rollbackError
                    );

                }

            }


            sendSocketError(
                ack,
                error,
                "Não foi possível salvar as alterações do mundo."
            );


        } finally {

            client?.release();

        }

    });


    socket.on("world:create", async (payload = {}, ack) => {
        let client;
        let transactionStarted = false;

        try {
            const ownerId = getAuthenticatedUserId(socket);

            if (!isPlainObject(payload)) {
                throw createRequestError("Dados do mundo inválidos.");
            }

            const name = String(payload.name ?? "").trim();
            const description = String(payload.description ?? "").trim();
            const seed = String(payload.seed ?? "").trim();
            const visibility = payload.visibility ?? "private";
            const settings = payload.settings ?? {};

            if (!name || name.length > 32) {
                throw createRequestError(
                    "O nome deve ter entre 1 e 32 caracteres."
                );
            }

            if (description.length > 500) {
                throw createRequestError(
                    "A descrição deve ter no máximo 500 caracteres."
                );
            }

            if (!seed || seed.length > 128) {
                throw createRequestError("Seed inválida.");
            }

            if (!["private", "public"].includes(visibility)) {
                throw createRequestError("Visibilidade inválida.");
            }

            if (!isPlainObject(settings)) {
                throw createRequestError(
                    "As configurações do mundo são inválidas."
                );
            }

            const settingsJson = JSON.stringify(settings);

            if (Buffer.byteLength(settingsJson, "utf8") > 65536) {
                throw createRequestError(
                    "As configurações do mundo são muito grandes."
                );
            }

            client = await pool.connect();

            await client.query("BEGIN");
            transactionStarted = true;

            const result = await client.query(
                `
                INSERT INTO worlds (
                    owner_id,
                    name,
                    description,
                    visibility,
                    seed,
                    settings,
                    max_players
                )
                VALUES ($1, $2, $3, $4, $5, $6::jsonb, 16)
                RETURNING
                    id,
                    owner_id,
                    name,
                    description,
                    visibility,
                    seed,
                    settings,
                    max_players,
                    created_at,
                    updated_at
                `,
                [
                    ownerId,
                    name,
                    description,
                    visibility,
                    seed,
                    settingsJson
                ]
            );

            const world = result.rows[0];

            // Associa o criador ao mundo como proprietário.
            await client.query(
                `
                INSERT INTO world_members (
                    world_id,
                    user_id,
                    role
                )
                VALUES ($1, $2, 'owner')
                `,
                [world.id, ownerId]
            );

            await client.query("COMMIT");
            transactionStarted = false;

            if (typeof ack === "function") {
                ack({
                    success: true,
                    world
                });
            }

            console.log(
                `Mundo criado: ${world.id} | Proprietário: ${ownerId}`
            );

        } catch (error) {
            if (client && transactionStarted) {
                try {
                    await client.query("ROLLBACK");
                } catch (rollbackError) {
                    console.error("Erro no rollback:", rollbackError);
                }
            }

            sendSocketError(
                ack,
                error,
                "Não foi possível criar o mundo."
            );

        } finally {
            client?.release();
        }
    });

    socket.on("world:list", async (payload = {}, ack) => {

        try {

            const userId = getAuthenticatedUserId(socket);

            const result = await pool.query(
                `
                SELECT
                    w.id,
                    w.owner_id,
                    w.name,
                    w.description,
                    w.visibility,
                    w.seed,
                    w.settings,
                    w.max_players,
                    w.created_at,
                    w.updated_at,

                    CASE
                        WHEN w.owner_id = $1 THEN 'owner'
                        ELSE COALESCE(wm.role, 'member')
                    END AS role,

                    (wm.user_id IS NOT NULL) AS is_member

                FROM worlds w

                LEFT JOIN world_members wm
                    ON wm.world_id = w.id
                    AND wm.user_id = $1

                WHERE
                    w.owner_id = $1

                    OR wm.user_id = $1

                    OR w.visibility = 'public'

                ORDER BY
                    w.updated_at DESC,
                    w.created_at DESC
                `,
                [userId]
            );


            if (typeof ack === "function") {

                ack({

                    success: true,

                    worlds: result.rows

                });

            }


        } catch (error) {

            console.error(
                "Erro em world:list:",
                error
            );

            sendSocketError(
                ack,
                error,
                "Não foi possível listar os mundos."
            );

        }

    });

    socket.on("world:load", async (payload = {}, ack) => {
        let client;
        let transactionStarted = false;

        try {
            const userId = getAuthenticatedUserId(socket);
            const worldId = payload?.worldId;

            if (
                typeof worldId !== "string" ||
                !UUID_REGEX.test(worldId)
            ) {
                throw createRequestError("Identificador do mundo inválido.");
            }

            client = await pool.connect();

            await client.query(
                "BEGIN ISOLATION LEVEL REPEATABLE READ"
            );

            transactionStarted = true;

            // Verifica se a conta é proprietária,
            // membro ou se o mundo é público.
            const worldResult = await client.query(
                `
                SELECT
                    w.id,
                    w.owner_id,
                    w.name,
                    w.description,
                    w.visibility,
                    w.seed,
                    w.settings,
                    w.max_players,
                    w.created_at,
                    w.updated_at

                FROM worlds w

                WHERE
                    w.id = $1
                    AND (
                        w.owner_id = $2

                        OR w.visibility = 'public'

                        OR EXISTS (
                            SELECT 1
                            FROM world_members wm
                            WHERE
                                wm.world_id = w.id
                                AND wm.user_id = $2
                        )
                    )

                LIMIT 1
                `,
                [worldId, userId]
            );

            if (worldResult.rows.length === 0) {
                throw createRequestError(
                    "Mundo não encontrado ou você não possui acesso."
                );
            }

            const world = worldResult.rows[0];

            // Registra a associação de proprietários antigos
            // ou de usuários que acessaram um mundo público.
            if (
                world.owner_id === userId ||
                world.visibility === "public"
            ) {
                await client.query(
                    `
                    INSERT INTO world_members (
                        world_id,
                        user_id,
                        role
                    )
                    VALUES ($1, $2, $3)

                    ON CONFLICT (world_id, user_id)
                    DO NOTHING
                    `,
                    [
                        worldId,
                        userId,
                        world.owner_id === userId
                            ? "owner"
                            : "member"
                    ]
                );
            }

            // Carrega as alterações dos blocos.
            const chunksResult = await client.query(
                `
                SELECT
                    chunk_x,
                    chunk_y,
                    chunk_z,
                    chunk_data

                FROM world_chunks

                WHERE world_id = $1

                ORDER BY chunk_x, chunk_z, chunk_y
                `,
                [worldId]
            );

            // Carrega somente o estado do jogador autenticado.
            const playerResult = await client.query(
                `
                SELECT
                    world_id,
                    user_id,
                    position_x,
                    position_y,
                    position_z,
                    player_data,
                    updated_at

                FROM player_world_states

                WHERE
                    world_id = $1
                    AND user_id = $2

                LIMIT 1
                `,
                [worldId, userId]
            );

            await client.query("COMMIT");
            transactionStarted = false;

            if (typeof ack === "function") {
                ack({
                    success: true,

                    world,

                    chunks: chunksResult.rows,

                    playerState:
                        playerResult.rows[0] ?? null
                });
            }

            console.log(
                `Mundo carregado: ${worldId} | Jogador: ${userId}`
            );

        } catch (error) {
            if (client && transactionStarted) {
                try {
                    await client.query("ROLLBACK");
                } catch (rollbackError) {
                    console.error("Erro no rollback:", rollbackError);
                }
            }

            sendSocketError(
                ack,
                error,
                "Não foi possível carregar o mundo."
            );

        } finally {
            client?.release();
        }
    });

    // Desconexão
    socket.on("disconnect", () => {
        leaveWorld(socket);

        console.log(`Jogador desconectado: ${socket.id}`);
    });
});

// Inicialização
async function iniciarServidor() {
    try {
        // Testa a conexão com PostgreSQL
        await testarBanco();

        // Inicia o servidor somente se o banco estiver acessível
        httpServer.listen(PORT, () => {
            console.log(`Servidor multiplayer ativo na porta ${PORT}`);
        });

    } catch (error) {
        console.error("Falha ao iniciar o servidor:", error.message);

        await pool.end();

        process.exit(1);
    }
}

iniciarServidor();