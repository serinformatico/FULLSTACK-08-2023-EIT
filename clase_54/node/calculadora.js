/*
    NODE JS: Ejemplo que demuestra el uso de JavaScript en el backend.

    En la consola, este archivo se ejecuta con el comando: node calculadora.js
    desde la carpeta contenedora.
*/

const sumar = (a, b) => {
    return a + b;
};

const restar = (a, b) => {
    return a - b;
};

const multiplicar = (a, b) => {
    return a * b;
};

const dividir = (a, b) => {
    return a / b;
};

console.log("Resultado de la suma: ", sumar(5, 10));
console.log("Resultado de la resta: ", restar(15, 7));
console.log("Resultado de la multiplicación: ", multiplicar(5, 2));
console.log("Resultado de la división: ", dividir(10, 2));
