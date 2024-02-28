/*
    NODE JS: Ejemplo que demuestra el uso del módulo path.
*/

const path = require("path");

const rutaConcatenada = path.join(__dirname, "archivos", "documento1.txt");
console.log("Ruta concatenada: ", rutaConcatenada);

const nombreDelArchivo = path.basename(rutaConcatenada);
console.log("Nombre del archivo: ", nombreDelArchivo);

const nombreDeLaExtensionDelArchivo = path.extname(rutaConcatenada);
console.log("Nombre de la extensión del archivo: ", nombreDeLaExtensionDelArchivo);

const rutaDelArchivo = path.dirname(rutaConcatenada);
console.log("Ruta del archivo: ", rutaDelArchivo);
