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
        worldId.length > 0 &&
        worldId.length <= 100 &&
        /^[a-zA-Z0-9_-]+$/.test(worldId)
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

function publicPlayer(player) {
    const { socketId, ...publicData } = player;

    return publicData;
}

io.on("connection", (socket) => {

    console.log(`Jogador conectado: ${socket.id}`);

    socket.data.worldId = null;
    socket.data.lastMovement = 0;

    // Entrada em um mundo

socket.on("world:join", (data, callback) => {
    const respond = typeof callback === "function"
        ? callback
        : () => {};

    const worldId = data?.worldId;

    const userId = socket.data.user.id;
    const playerName = sanitizeName(
        socket.data.user.username
    );

    if (!isValidWorldId(worldId)) {
        return respond({
            success: false,
            message: "Identificador de mundo inválido."
        });
    }

    // Evita entrar duas vezes na mesma sala.
    if (socket.data.worldId === worldId) {
        return respond({
            success: true,
            message: "Você já está neste mundo."
        });
    }

    // Sai da sala anterior.
    leaveWorld(socket);

    const world = getWorld(worldId);

    // Impede duas conexões da mesma conta na mesma sala.
    if (world.has(userId)) {
        return respond({
            success: false,
            message: "Esta conta já está conectada neste mundo."
        });
    }

    if (world.size >= MAX_PLAYERS_PER_WORLD) {
        if (world.size === 0) {
            worlds.delete(worldId);
        }

        return respond({
            success: false,
            message: "Este mundo já atingiu o limite de 16 jogadores."
        });
    }

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

    // Armazena usando o UUID permanente.
    world.set(userId, player);

    socket.join(worldId);
    socket.data.worldId = worldId;

    // Envia os jogadores existentes.
    respond({
        success: true,
        worldId,

        players: Array.from(world.values())
            .filter(other => other.id !== userId)
            .map(publicPlayer)
    });

    // Avisa os outros jogadores.
    socket.to(worldId).emit(
        "player:joined",
        publicPlayer(player)
    );

    console.log(
        `${playerName} (${userId}) entrou no mundo ${worldId} ` +
        `(${world.size}/${MAX_PLAYERS_PER_WORLD})`
    );
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