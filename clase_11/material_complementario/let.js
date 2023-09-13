// Tipos de datos:
let valorNumberEntero = 10;
let valorNumberDecimal = 5.75;
let valorString = "Letras, numeros 123 y símbolos @#&";
let valorBoolean = true;
let valorNull = null;
let valorUndefined;

console.log("\nEJEMPLO N°1: Variables");
console.log(valorNumberEntero);
console.log(valorNumberDecimal);
console.log(valorString);
console.log(valorBoolean);
console.log(valorNull);
console.log(valorUndefined);

valorNumberEntero = 15;
valorBoolean = false;

// Las variables let si se pueden modificar en "tiempo de ejecución"
console.log("\nEJEMPLO N°2: Variables modificadas");
console.log(valorNumberEntero, valorBoolean); // Impirime 15 y false