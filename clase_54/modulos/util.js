/*
    NODE JS: Ejemplo que demuestra el uso del módulo util.

    Format: Lista de marcador de posición:
        ● %s: String: textos.
        ● %d: Digit: numeros entero muy grande (bigint).
        ● %i: Integer: numeros entero y decimales.
        ● %o: object: objetos.
        ● %j: JSON: texto serializado.
        ● %%: Sign: un signo de porcentaje.

*/

const util = require("util");

const textoformateado1 = util.format("%s tiene %d años", "Juan", 30);
console.log("texto Formateado 1: ", textoformateado1);

// El siguiente código, resuelve el output de string + objects:
// console.log("Juan tiene 30 años. Domicilio:" + domicilio); // Imprime: Juan tiene 30 años. Domicilio:[object Object]
const domicilio = { calle: "Av. Siempreviva", numero: 2024};
const textoformateado2 = util.format("%s tiene %d años. Domicilio: %o", "Juan", 30, domicilio);
console.log("texto Formateado 2: ", textoformateado2);

const objeto = { a: 1, b: "texto", c: [1, 2, 3] };
console.log(util.inspect(objeto));
