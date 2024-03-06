const fs = require("fs");
const path = require("path");

const rutaDelArchivo = path.join(__dirname, "files", "archivo.json");

const personas = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        edad: 21,
    },
    {
        nombre: "Lorena",
        apellido: "Medina",
        edad: 25,
    },
];

// Sobrescribe el contenido de un archivo existente o lo crea en el caso de no existir.
const escribirContenido = (contenido) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(rutaDelArchivo, contenido, "utf8", (error) => {
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

            console.log("Contenido leido");
            resolve(result);
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

const probarFS = async () => {
    try {

        await escribirContenido(JSON.stringify(personas, null, "\t"));
        const contenido1 = JSON.parse(await leerContenido());
        console.log("Contenido 1: ", contenido1);

        contenido1.push({
            nombre: "Daniel",
            apellido: "Pereyra",
            edad: 30,
        });

        await escribirContenido(JSON.stringify(contenido1, null, "\t"));
        const contenido2 = JSON.parse(await leerContenido());
        console.log("Contenido 2: ", contenido2);

        await eliminarArchivo();
    } catch (error) {
        console.log(error.message);
    }
};

probarFS();