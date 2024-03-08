/*
    NODE JS: Ejemplo que demuestra el uso de Multer y CORS

    Comnado de instalación:
        npm install multer --save
        npm install cors --save
*/

const express = require("express");
const path = require("path");
const multer = require("multer");
const cors = require("cors");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const server = express();

// Configuración de CORS
server.use(cors({
    origin: "http://localhost:5173",
    methods: "GET,PUT,PATCH,POST,DELETE",
}));

// Configuración de Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            cb(null, path.join(__dirname, "/public/images"));
        } else {
            cb(null, path.join(__dirname, "uploads"));
        }
    },
    filename: function (req, file, cb) {
        const { id } = req.params;
        const extension = file.originalname.slice(file.originalname.lastIndexOf("."));

        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            if (id) {
                const filename = `img_${id}${extension}`;
                cb(null, filename);
            }
        } else {
            cb(null, file.originalname);
        }
    },
});

const upload = multer({ storage });

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || "localhost";

// Declaración de ruta estática: http://127.0.0.1:3000/public/images
server.use("/public", express.static(path.join(__dirname, "public")));

// Endpoint para subir una imagen de un coche. URL: http://127.0.0.1:3000/api/coches/upload/1 (form-data)
server.post("/api/coches/upload/:id", upload.single("file"), (req, res) => {
    res.set({ "Content-Type": "application/json" });

    try {
        const file = req.file;

        if (!file) {
            return res.status(400).send({ error: "Solicitud sin archivo" });
        }

        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
            return res.status(201).send({ filename: file.filename, url: `http://127.0.0.1:3000/public/images/${file.filename}` });
        }

        res.status(201).send({ filename: file.filename, url: null });
    } catch (error) {
        res.status(500).send({ error: error.message });
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