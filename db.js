
require("dotenv").config();

const { Pool } = require("pg");

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL não foi configurada.");
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 5,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000
});

pool.on("error", (error) => {
    console.error("Erro inesperado no PostgreSQL:", error);
});

async function testarBanco() {
    const resultado = await pool.query(
        "SELECT NOW() AS horario, current_database() AS banco"
    );

    console.log("PostgreSQL conectado:", resultado.rows[0]);
}

module.exports = {
    pool,
    testarBanco
};
