/*
    NODE JS: Ejemplo que demuestra el uso de parámetros y métodos HTTP
*/

const express = require("express");
const { coches, generateId } = require("./data.js");
require("dotenv").config();

const server = express();

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// Middleware: Analiza las solicitudes con cuerpos en formato JSON. Cuando se
// recibe una solicitud con un cuerpo en formato JSON, este middleware se encarga
// de analizar ese JSON y hacerlo accesible en el objeto req.body para que pueda
// ser utilizado fácilmente en las rutas posteriores.
server.use(express.json());

// Endpoint para obtener los coches. URL: http://127.0.0.1:3000/api/coches?marca=Fiat&anio=2021
server.get("/api/coches", (req, res) => {
    res.set({ "Content-Type": "application/json" });

    const { modelo, anio } = req.query;
    let cochesFiltrados = [...coches];

    if (modelo) {
        cochesFiltrados = cochesFiltrados.filter((coche) => String(coche.modelo).toLowerCase() === String(modelo).toLowerCase());
    }

    if (anio) {
        cochesFiltrados = cochesFiltrados.filter((coche) => Number(coche.anio) === Number(anio));
    }

    res.status(200).send(cochesFiltrados);
});

// Endpoint para obtener un coche en específico. URL: http://127.0.0.1:3000/api/coches/1
server.get("/api/coches/:id", (req, res) => {
    res.set({ "Content-Type": "application/json" });

    const { id } = req.params;
    const coche = coches.find((coche) => coche.id === Number(id));

    if (!coche) {
        return res.status(400).send({ message: "El id no corresponde a un coche registrado" });
    }

    res.status(200).send(coche);
});

// Endpoint para crear un coche. URL: http://127.0.0.1:3000/api/coches
server.post("/api/coches/", (req, res) => {
    res.set({ "Content-Type": "application/json" });

    const { marca, modelo, anio } = req.body;

    if (!marca || !modelo || !anio) {
        return res.status(400).send({ message: "Faltan datos de relevancia" });
    }

    const nuevoCoche = { id: generateId(), marca, modelo, anio };
    coches.push(nuevoCoche);

    res.status(200).send(nuevoCoche);
});

// Endpoint para modificar un coche. URL: http://127.0.0.1:3000/api/coches/1
server.put("/api/coches/:id", (req, res) => {
    res.set({ "Content-Type": "application/json" });

    const { id } = req.params;
    const { marca, modelo, anio } = req.body;
    const index = coches.findIndex((coche) => coche.id === Number(id));

    if (index < 0) {
        return res.status(400).send({ message: "El id no corresponde a un coche registrado" });
    }

    if (!marca || !modelo || !anio) {
        return res.status(400).send({ message: "Faltan datos de relevancia" });
    }

    const cocheModificado = { id: Number(id), marca, modelo, anio };
    coches[index] = cocheModificado;

    res.status(200).send(cocheModificado);
});

// Endpoint para actualizar el año de un coche. URL: http://127.0.0.1:3000/api/coches/2
server.patch("/api/coches/:id", (req, res) => {
    res.set({ "Content-Type": "application/json" });

    const { id } = req.params;
    const { anio } = req.body;
    const index = coches.findIndex((coche) => coche.id === Number(id));

    if (index < 0) {
        return res.status(400).send({ message: "El id no corresponde a un coche registrado" });
    }

    if (!anio) {
        return res.status(400).send({ message: "Faltan datos de relevancia" });
    }

    coches[index].anio = Number(anio);

    res.status(200).send(coches[index]);
});

// Endpoint para eliminar un coche en específico. URL: http://127.0.0.1:3000/api/coches/1
server.delete("/api/coches/:id", (req, res) => {
    res.set({ "Content-Type": "application/json" });
    const { id } = req.params;

    const index = coches.findIndex((coche) => coche.id === Number(id));

    if (index < 0) {
        return res.status(400).send(JSON.stringify({ message: "El ID no corresponde con un coche registrado" }));
    }

    coches.splice(index, 1);

    res.status(200).send(JSON.stringify(coches));
});

// Control de rutas inexistentes
server.use("*", (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>");
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => {
    console.log(`Ejecutandose en http://${HOST}:${PORT}/api`);
});