const fs = require("fs");
const path = require("path");

const rutaDelArchivo = path.join(__dirname, "files", "archivo.txt");

// Sobrescribe el contenido de un archivo existente o lo crea en el caso de no existir.
const escribirContenido = (contenido) => {
    fs.writeFile(rutaDelArchivo, contenido, "utf8", (error) => {
        if (error) {
            console.log("Error al escribir contenido en el archivo");
        }

        console.log("\nContenido escrito");
    });
};

const leerContenido = () => {
    fs.readFile(rutaDelArchivo, "utf8", (error, result) => {
        if (error) {
            console.log("Error al leer el archivo");
        }

        console.log("Contenido leido");
        console.log(result);
    });
};

const agregarContenido = (contenido) => {
    fs.appendFile(rutaDelArchivo, contenido, "utf8", (error) => {
        if (error) {
            console.log("Error al agregar contenido en el archivo");
        }

        console.log("\nContenido agregado");
    });
};

const eliminarArchivo = () => {
    fs.unlink(rutaDelArchivo, (error) => {
        if (error) {
            console.log("Error al eliminar el archivo");
        }

        console.log("\nArchivo eliminado");
    });
};

const probarFS = () => {
    escribirContenido("Hola Mundo");
    leerContenido();
    agregarContenido("\nBienvenidos a Programación BackEnd");
    eliminarArchivo();
};

probarFS();