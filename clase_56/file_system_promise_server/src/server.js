const express = require("express");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const { escribirContenido, leerContenido, generateId } = require("./fs.js");

const server = express();

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";
const MESSAGE_500 = "Se ha generado un error en el servidor";

// Middleware
server.use(express.json());

// Endpoint para obtener los coches. URL: http://127.0.0.1:3000/api/coches?marca=Fiat&anio=2021
server.get("/api/coches", async (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try {
        let coches = await leerContenido();
        const { modelo, anio } = req.query;

        if (modelo) {
            coches = coches.filter((coche) => String(coche.modelo).toLowerCase() === String(modelo).toLowerCase());
        }

        if (anio) {
            coches = coches.filter((coche) => Number(coche.anio) === Number(anio));
        }

        res.status(200).send(coches);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: MESSAGE_500 });
    }
});

// Endpoint para obtener un coche en específico. URL: http://127.0.0.1:3000/api/coches/1
server.get("/api/coches/:id", async (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try {
        const { id } = req.params;
        const coches = await leerContenido();
        const coche = coches.find((coche) => coche.id === Number(id));

        if (!coche) {
            return res.status(400).send({ message: "El id no corresponde a un coche registrado" });
        }

        res.status(200).send(coche);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: MESSAGE_500 });
    }
});

// Endpoint para crear un coche. URL: http://127.0.0.1:3000/api/coches
server.post("/api/coches/", async (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try{
        const { marca, modelo, anio } = req.body;

        if (!marca || !modelo || !anio) {
            return res.status(400).send({ message: "Faltan datos de relevancia" });
        }

        const coches = await leerContenido();
        const nuevoCoche = { id: generateId(coches), marca, modelo, anio };
        coches.push(nuevoCoche);
        await escribirContenido(coches);

        res.status(201).send(nuevoCoche);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: MESSAGE_500 });
    }
});

// Endpoint para modificar un coche. URL: http://127.0.0.1:3000/api/coches/1
server.put("/api/coches/:id", async (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try {
        const { id } = req.params;
        const { marca, modelo, anio } = req.body;
        const coches = await leerContenido();
        const index = coches.findIndex((coche) => coche.id === Number(id));

        if (index < 0) {
            return res.status(400).send({ message: "El id no corresponde a un coche registrado" });
        }

        if (!marca || !modelo || !anio) {
            return res.status(400).send({ message: "Faltan datos de relevancia" });
        }

        const cocheModificado = { id: Number(id), marca, modelo, anio };
        coches[index] = cocheModificado;
        await escribirContenido(coches);

        res.status(200).send(cocheModificado);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: MESSAGE_500 });
    }
});

// Endpoint para actualizar el año de un coche. URL: http://127.0.0.1:3000/api/coches/2
server.patch("/api/coches/:id", async (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try {
        const { id } = req.params;
        const { anio } = req.body;
        const coches = await leerContenido();
        const index = coches.findIndex((coche) => coche.id === Number(id));

        if (index < 0) {
            return res.status(400).send({ message: "El id no corresponde a un coche registrado" });
        }

        if (!anio) {
            return res.status(400).send({ message: "Faltan datos de relevancia" });
        }

        coches[index].anio = Number(anio);
        await escribirContenido(coches);

        res.status(200).send(coches[index]);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ error: MESSAGE_500 });
    }
});

// Endpoint para eliminar un coche en específico. URL: http://127.0.0.1:3000/api/coches/1
server.delete("/api/coches/:id", async (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try{
        const { id } = req.params;
        const coches = await leerContenido();
        const index = coches.findIndex((coche) => coche.id === Number(id));

        if (index < 0) {
            return res.status(400).send(JSON.stringify({ message: "El ID no corresponde con un coche registrado" }));
        }

        coches.splice(index, 1);
        await escribirContenido(coches);

        res.status(200).send(JSON.stringify(coches));
    } catch (error) {
        console.log(error.message);
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