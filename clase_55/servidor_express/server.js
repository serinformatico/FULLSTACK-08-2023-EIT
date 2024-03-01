/*
    NODE JS: Ejemplo que demuestra el uso del Framework Express

    Comnado de instalación:
        npm install express --save
*/

const express = require("express");
require("dotenv").config();

const server = express();

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// Creación de endpoint para la ruta http://127.0.0.1:3000/ejemplo/text
server.get("/ejemplo/text", (req, res) => {
    res.set({ "Content-Type": "text/plain; charset=utf8" });
    res.status(200).send("Bienvenidos. Esto es una demostración");
});

// Creación de endpoint para la ruta http://127.0.0.1:3000/ejemplo/html
server.get("/ejemplo/html", (req, res) => {
    res.set({ "Content-Type": "text/html" });
    res.status(200).send("<div><h1>Bienvenidos</h1><p>Esto es una demostración</p></div>");
});

// Creación de endpoint para la ruta http://127.0.0.1:3000/ejemplo/json
server.get("/ejemplo/json", (req, res) => {
    const objeto = {
        bienvenida: "Bienvenidos",
        descripcion: "Esto es una demostración",
    };

    res.set({ "Content-Type": "application/json" });
    res.status(200).send(objeto);
});

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.set("Content-Type", "text/html");
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}/ejemplo`);
});