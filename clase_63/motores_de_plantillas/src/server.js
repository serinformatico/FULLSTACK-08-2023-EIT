/*
    NODE JS: Ejemplo que demuestra el uso de EJS
*/

const express = require("express");
const path = require("path");
const coches = require("./data.js");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const server = express();
const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// Configuración del motor de plantillas
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views/pages/"));

// Configuración de carpeta estatica
server.use("/public", express.static(path.join(__dirname, "public")));

// Enpoint para obtener coches http://127.0.0.1:3000/coches
server.get("/coches", (req, res) => {
    res.status(200).render("coches", { coches });
});

// Enpoint para obtener un coche en específico http://127.0.0.1:3000/coches/1
server.get("/coches/:id", (req, res) => {
    const { id } = req.params;
    const coche = coches.find((item) => item.id === Number(id));

    if (!coche) return res.status(400).render("coche", { coche });

    res.status(200).render("coche", { coche });
});

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}`);
});