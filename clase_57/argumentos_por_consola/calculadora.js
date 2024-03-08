/*
    NODE JS: Ejemplo que demuestra el uso de JavaScript en el backend + Pasaje de argumentos.

    En la consola, este archivo se ejecuta con el comando: node calculadora.js 8 5
    desde la carpeta contenedora.
*/

let a = Number(process.argv[2]);
let b = Number(process.argv[3]);

console.log(process.argv);

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

console.log("Resultado de la suma: ", sumar(a, b));
console.log("Resultado de la resta: ", restar(a, b));
console.log("Resultado de la multiplicación: ", multiplicar(a, b));
console.log("Resultado de la división: ", dividir(a, b));
