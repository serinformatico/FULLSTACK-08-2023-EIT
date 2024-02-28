/*
    NODE JS: Ejemplo que demuestra el uso de como importar con CommonJS.
*/

// Default
const saludar = require("./commonjs_export.js");
console.log(saludar());

// Custom (descomentar para probar, comentar el modo default)
// const { despedir } = require("./commonjs_export.js");
// console.log(despedir());