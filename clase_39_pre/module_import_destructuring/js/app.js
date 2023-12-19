import calculadora from "./calculadora.js";

// El destructuring es la desestructuración de una expresión de JavaScript
// que permite desempacar valores de arreglos o propiedades de objetos en
// distintas variables.
const valores = {
    a: 10,
    b: 15,
    c: "Hola",
};

const { a, c} = valores;
console.log(a, c);

const inputNumeroA = document.getElementById("numero-a");
const inputNumeroB = document.getElementById("numero-b");
const selectTipoDeOperacion = document.getElementById("tipo-operacion");
const inputResultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btn-calcular");

calculadora({
    inputNumeroA,
    inputNumeroB,
    selectTipoDeOperacion,
    inputResultado,
    btnCalcular
});