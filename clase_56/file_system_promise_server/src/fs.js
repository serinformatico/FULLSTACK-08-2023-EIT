const fs = require("fs");
const path = require("path");

const rutaDelArchivo = path.join(__dirname, "files", "data.json");

const escribirContenido = (contenido) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(rutaDelArchivo, JSON.stringify(contenido, null, "\t"), "utf8", (error) => {
            if (error) {
                reject(new Error("Error al escribir contenido en el archivo"));
            }

            console.log("\nContenido escrito");
            resolve(true);
        });
    });
};

const leerContenido = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(rutaDelArchivo, "utf8", (error, result) => {
            if (error) {
                reject(new Error("Error al leer el archivo"));
            }

            try {
                const resultJSON = JSON.parse(result);
                resolve(resultJSON);
            } catch (error) {
                reject(new Error("Error al deserializar el contenido"));
            }
        });
    });
};

const eliminarArchivo = () => {
    return new Promise((resolve, reject) => {
        fs.unlink(rutaDelArchivo, (error) => {
            if (error) {
                reject(new Error("Error al eliminar el archivo"));
            }

            console.log("\nArchivo eliminado");
            resolve(true);
        });
    });
};

const generateId = (coches) => {
    let maxId = 0;

    coches.forEach((item) => {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });

    return maxId + 1;
};

module.exports = {
    escribirContenido,
    leerContenido,
    eliminarArchivo,
    generateId,
};