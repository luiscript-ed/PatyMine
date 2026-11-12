const http = require("http");
const { Server } = require("socket.io");
const { pool, testarBanco } = require("./db");

const PORT = process.env.PORT || 3000;
const MAX_PLAYERS_PER_WORLD = 16;

// Servidor HTTP
const httpServer = http.createServer();

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

    if (!worldId) {
        return;
    }

    const world = worlds.get(worldId);

    if (world) {
        world.delete(socket.id);

        socket.to(worldId).emit("player:left", {
            id: socket.id
        });

        if (world.size === 0) {
            worlds.delete(worldId);
        }
    }

    socket.leave(worldId);
    socket.data.worldId = null;
}

// Conexões
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
        const playerName = sanitizeName(data?.name);

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

        // Sai do mundo anterior, caso exista.
        leaveWorld(socket);

        const world = getWorld(worldId);

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
            id: socket.id,
            name: playerName,
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

        world.set(socket.id, player);

        socket.join(worldId);
        socket.data.worldId = worldId;

        // Envia os jogadores que já estavam no mundo.
        respond({
            success: true,
            worldId,
            players: Array.from(world.values()).filter(
                other => other.id !== socket.id
            )
        });

        // Avisa os outros jogadores sobre a entrada.
        socket.to(worldId).emit("player:joined", player);

        console.log(
            `${playerName} entrou no mundo ${worldId} (${world.size}/${MAX_PLAYERS_PER_WORLD})`
        );
    });

    // Atualização da posição do jogador
    socket.on("player:move", (data) => {
        const worldId = socket.data.worldId;

        if (!worldId) {
            return;
        }

        const world = worlds.get(worldId);
        const player = world?.get(socket.id);

        if (!player || !data) {
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

        // Limites básicos para evitar valores absurdos.
        const coordinates = [position.x, position.y, position.z];

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

        // Envia a atualização aos outros jogadores da mesma sala.
        socket.to(worldId).emit("player:moved", {
            id: socket.id,
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