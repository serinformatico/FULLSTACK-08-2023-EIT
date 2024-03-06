const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const server = express();

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// Declaración de ruta estática: http://127.0.0.1:3000/public/images/img001.jpg
server.use("/public", express.static(path.join(__dirname, "public")));

// Endpoint de demostración. URL: http://127.0.0.1:3000/api/demo
server.get("/api/demo", (req, res) => {
    res.set({ "Content-Type": "text/html" });
    res.status(200).send("<div><h1>Bienvenidos</h1><p>Esto es una demostración</p></div>");
});

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}/api`);
});