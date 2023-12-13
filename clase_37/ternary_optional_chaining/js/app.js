/*
    Operador ternario

    Es un operador que toma tres operandos: una condición seguida de un signo
    de interrogación(?), luego una expresión para ejecutar si la condición es
    verdadera, seguida de dos puntos(:), y finalmente la expresión para ejecutar
    si la condición es falsa.

    Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
*/

let valorBooleano = true;
let resultadoTernario = valorBooleano ? "Soy una condición verdadera" : "Soy una condición false";
console.log("resultadoTernario:", resultadoTernario);

let a = 10;
let b = 15;
let queValorEsMayor = (a > b) ? a : b;
console.log("queValorEsMayor:", queValorEsMayor);


/*
    Operador Optional Chaining ?.

    Permite leer el valor de una propiedad ubicada dentro de una cadena de
    objetos conectados sin tener que validar expresamente que cada referencia
    en la cadena sea válida.

    Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
*/

// Declaración e instanciación o creación de un objeto persona.
const persona = {
    nombre: "Juan",
    numerosPreferidos: {
        a: 7,
        b: 10
    }
};

console.log(persona.numerosPreferidos?.a);  // Imprime 7

console.log(persona.coloresPreferidos?.c);  // Imprime undefined

// TypeError: Cannot read properties of undefined.
// console.log(persona.coloresPreferidos.c);  // Descomentar para probar