const express = require("express");
const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const server = express();
const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// Middleware
server.use(express.json());

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}/api`);
});