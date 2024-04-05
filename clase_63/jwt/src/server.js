/*
    NODE JS: Ejemplo que demuestra el uso de JWT
*/

const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const { generateToken, verifyToken, checkRole } = require("./security.js");
const users = require("./data.js");

const server = express();
const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// Middlewares
server.use(express.json());

// Endpoint para obtener un token
server.post("/api/login", (req, res) => {
    const { username, password } = req.body;

    for (const user of users) {
        if (user.username === username && user.password === password) {
            return res.status(200).send({ token: generateToken(user.username, user.isAdmin) });
        }
    }

    return res.status(400).send("<h1>Sistema Wep</h1><p>Nombre de usuario y/o contraseña incorrectas</p>");
});

// Endpoint protegida que exige un token válido
server.get("/api/recurso", verifyToken, (req, res) => {
    res.status(200).send(`<h1>Sistema Wep</h1><h3>Recurso restringido</h3><p>Hola ${req.username}</p>`);
});

// Endpoint protegida que exige un token válido y un rol de administrador
server.get("/api/admin/recurso", verifyToken, checkRole, (req, res) => {
    res.status(200).send(`<h1>Sistema Wep</h1><h3>Recurso restringido de acceso exclusivo para administradores</h3><p>Hola ${req.username}</p>`);
});

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}/api`);
});