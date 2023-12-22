import calculadora from "./calculadora.js";

/*
    El destructuring es la desestructuración es una expresión de JavaScript
    que permite desempacar valores de arreglos o propiedades de objetos en
    distintas variables.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/

// EJEMPLO: Uso con Objects
const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 21,
    esMayorDeEdad: true
};

// a). Declara las variable y les asigna los valores que son extraidos
// del objeto. Se debe tener en cuenta, el orden de las variables
// y los nombres de las propiedades.
let { nombre, esMayorDeEdad } = persona;

// b). Se imprime por pantalla por medio de console.log, el resultado
// de cada variable.
console.log("EJEMPLO: Destructuring - Uso con Objects");
console.log(nombre);
console.log(esMayorDeEdad);


/* ******************* EJEMPLO DE MODULOS ******************* */
const inputNumeroA = document.getElementById("numero-a");
const inputNumeroB = document.getElementById("numero-b");
const inputResultado = document.getElementById("resultado");
const tipoDeOperacion = document.getElementById("tipo-operacion");
const btnCalcular = document.getElementById("btn-calcular");

calculadora({
    inputNumeroA,
    inputNumeroB,
    inputResultado,
    tipoDeOperacion,
    btnCalcular
});