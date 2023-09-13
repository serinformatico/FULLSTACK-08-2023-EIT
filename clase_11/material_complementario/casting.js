/*
    Casting de tipos de datos
*/

let castingDeStringABooleano = Boolean("true");
console.log("\nEJEMPLO N°1: Convertir de String a Boolean");
console.log(castingDeStringABooleano, typeof castingDeStringABooleano); // true boolean

let castingDeNumeroABooleano = Boolean(0);
console.log("\nEJEMPLO N°2: Convertir de Number a Boolean");
console.log(castingDeNumeroABooleano, typeof castingDeNumeroABooleano); // false boolean

let castingDeStringANumero = Number("12.52");
console.log("\nEJEMPLO N°3: Convertir de String a Number");
console.log(castingDeStringANumero, typeof castingDeStringANumero);     // 12.52 number

let castingDeNumeroAString = String(500);
console.log("\nEJEMPLO N°4: Convertir de Number a String");
console.log(castingDeNumeroAString, typeof castingDeNumeroAString);     // 500 string