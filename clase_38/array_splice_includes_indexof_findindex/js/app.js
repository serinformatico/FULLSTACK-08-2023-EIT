/*
    El método splice() cambia el contenido de un array eliminando elementos
    existentes y/o agregando nuevos elementos.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/

const letras = ["A", "B", "C", "D", "E"];
console.log(letras);

// En el mismo array, agrega un nuevo elemento en el índice 2
letras.splice(2, 0, "Hola");
console.log("\nEJEMPLO N°1: Uso de splice");
console.log(letras);    // Imprime ['A', 'B', 'Hola', 'C', 'D', 'E']

// En el mismo array, elimina el elemento del índice 3
letras.splice(3, 1);
console.log("\nEJEMPLO N°2: Uso de splice");
console.log(letras);    // Imprime ['A', 'B', 'Hola', 'D', 'E']


/*
    El método includes() determina si una matriz incluye un determinado elemento,
    devuelve true o false según corresponda.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
*/

const numerosB = [10, 20, 30, 40, 50];

console.log("EJEMPLO: Uso de includes");
let numerosIncluyeEsteValor = numerosB.includes(30);
console.log(numerosIncluyeEsteValor);   // Imprime true (significa que lo incluye)


/*
    El método indexOf() retorna el primer índice en el que se puede
    encontrar un elemento dado en el array, ó retorna -1 si el elemento
    no esta presente.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
    -> Se usa exclusivamente con elementos de tipo primitivos.
*/

const numerosA = [10, 20, 30, 40, 50];

console.log("\nEJEMPLO N°1: Uso de indexOf");
let indiceDeUnValorBuscadoA = numerosA.indexOf(30);
console.log(indiceDeUnValorBuscadoA);   // Imprime 2 (significa que lo encontro)

console.log("\nEJEMPLO N°2: Uso de indexOf");
let indiceDeUnValorBuscadoB = numerosA.indexOf(100);
console.log(indiceDeUnValorBuscadoB);   // Imprime -1 (significa que no lo encontro)


/*
    El método findIndex() devuelve el índice del primer elemento de
    un array que cumpla con la concición de la función callback. En
    el caso contrario, devuelve -1.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
    -> Se usa especialmente con elementos de tipo objetos y/o array,
       también se puede usar con tipos primitivos.

*/

const coches = [
    { id: 1, marca: "Ford", modelo: "Fiesta" },
    { id: 2, marca: "Chevrolet", modelo: "S10" },
    { id: 3, marca: "Fiat", modelo: "Palio" }
];

console.log("\nEJEMPLO N°1: Uso de findIndex con objetos");
let indiceDeUnObjetoBuscado = coches.findIndex((elemento) => elemento.marca === "Fiat");
console.log(indiceDeUnObjetoBuscado);   // Imprime 2 (es el índice)

const numeros = [10, 20, 30, 40, 50];

console.log("\nEJEMPLO N°2: Uso de indexOf con primitivos");
let indiceDeUnValorBuscado = numeros.findIndex((elemento) => elemento === 40);
console.log(indiceDeUnValorBuscado);   // Imprime 3 (significa que lo encontro)