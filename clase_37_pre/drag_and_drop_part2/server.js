const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const server = express();
const PORT = 3030;
const HOST = '127.0.0.1';

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Configuración de la ruta http://127.0.0.1:3030/upload
server.post('/upload', async (request, response) => {
    let chunks = "";

    request.on('data', (chunk) => {
        chunks += chunk;
    });

    request.on('end', () => {
        const chunksOfData = chunks.split('\r\n');
        const indexes = [];
        const filesName = [];
        const filesContent = [];

        chunksOfData.forEach((value, index) => {
            if (value.match(/form-data; name="files"/)) {
                const hasFilename = value.match(/filename="(.+?)"/);

                if (!hasFilename) {
                    console.error("Archivo sin nombre.");
                    return response.status(400).send();
                }

                indexes.push(index);
                filesName.push(hasFilename[1]);
            }
        });

        for (let i = 0; i < indexes.length; i++) {
            const startIndex = indexes[i] + 3;
            const endIndex = (indexes[i + 1] || chunksOfData.length - 1) - 1;
            filesContent.push(chunksOfData.slice(startIndex, endIndex).join("\r\n"));
        }

        filesContent.forEach((value, index) => {
            const fileContent = Buffer.from(value);
            const filename = filesName[index];
            const filePath = path.join(__dirname, 'uploads', filename);

            if (filename.match(/.txt|.html|.css|.js|.json/)) {
                fs.writeFile(filePath, fileContent, err => {
                    if (err) {
                        console.log(`Se produjo un error en el proceso de subida. Error: ${err}`);
                        return response.status(500).send();
                    } else {
                        console.log('El archivo se ha subido correctamente.');
                    }
                });
            } else {
                console.log('Solo se permiten archivos con extensión: .txt|.html|.css|.js|.json');
                return response.status(400).send();
            }

        });

        response.status(201).send();
    });
});

// Control de rutas inexistentes
server.use('*', (request, response) => {
    response.status(404).send(`<h1>Error 404</h1><h3>La URL indicada no existe en este servidor</h3>`);
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));