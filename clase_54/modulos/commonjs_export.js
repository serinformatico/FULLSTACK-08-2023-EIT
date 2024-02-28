/*
    NODE JS: Ejemplo que demuestra el uso de como exportar con CommonJS.
*/

const SALUDO = "Hola Mundo";

const saludar = () => {
    return SALUDO;
};

const despedir = () => {
    return "Chau";
};

// Default
module.exports = saludar;

// Custom (descomentar para probar, comentar el modo default)
//module.exports = { saludar, despedir};