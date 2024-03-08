const express = require("express");
const path = require("path");
const sendMail = require("./mailer.js");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const server = express();

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// Endpoint para obtener los coches. URL: http://127.0.0.1:3000/api/send-mail?marca=Fiat&anio=2021
server.get("/api/send-mail", async (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try {
        const { to, subject, content } = req.query;

        if (!to || !subject || !content) {
            return res.status(4000).send({ error: "Faltan datos relevantes" });
        }

        const result = await sendMail(to, subject, content);

        res.status(200).send(result);
    } catch (error) {
        res.status(500).send({ error: MESSAGE_500 });
    }
});

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}/api`);
});