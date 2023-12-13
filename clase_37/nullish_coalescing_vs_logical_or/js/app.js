/*
    Operador Nullish Coalescing ??

    Es un operador lógico que devuelve su operando del lado derecho cuando
    su operando del lado izquierdo es nulo o indefinido y, de lo contrario,
    devuelve su operando del lado izquierdo.

    Valores manejados: null | undefined | false.

    Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
*/

let textoA = "Hola";
let textoB = "";
let booleano = false;
let numeroA = 10;
let numeroB = 0;
let numeroC = null;
let numeroD = 2 * 'a';
let numeroE;
let objeto = {};
let array = [];

// Se asigna un valor por defecto cuando la variable sea null o undefined
let demoTextoA = textoA ?? "Valor A";
let demoTextoB = textoB ?? "Valor B";
let demoBooleano = booleano ?? "Valor C";
let demoNumeroA = numeroA ?? 100;
let demoNumeroB = numeroB ?? 200;
let demoNumeroC = numeroC ?? 300;
let demoNumeroD = numeroD ?? 400;
let demoNumeroE = numeroE ?? 500;
let demoObjeto = objeto ?? { a: 100 };
let demoArray = array ?? [ 10 ];

console.log("\nEJEMPLO N°1: Uso de nullish coalescing ??");
console.log('demoTextoA:', demoTextoA);
console.log('demoTextoB:', demoTextoB);
console.log('demoBooleano:', demoBooleano);
console.log('demoNumeroA:', demoNumeroA);
console.log('demoNumeroB:', demoNumeroB);
console.log('demoNumeroC:', demoNumeroC);
console.log('demoNumeroD:', demoNumeroD);
console.log('demoNumeroE:', demoNumeroE);
console.log('demoObjeto:', demoObjeto);
console.log('demoArray:', demoArray);


/*
    Operador Logical OR ||

    Este operador es similar al operador "Nullish Coalescing" pero tiene una
    clara diferencia y es que discrimina los valores falsey.

    Un valor falsey (a veces escrito falsey) es un valor que se considera
    falso cuando se encuentra en un contexto booleano.

    Valores manejados: null | undefined | false | NaN | 0 | -0 | 0n | "".

    Fuente: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

// Se asigna un valor por defecto cuando la variable sea null o undefined
let demo2TextoA = textoA || "Valor A";
let demo2TextoB = textoB || "Valor B";
let demo2Booleano = booleano || "Valor C";
let demo2NumeroA = numeroA || 100;
let demo2NumeroB = numeroB || 200;
let demo2NumeroC = numeroC || 300;
let demo2NumeroD = numeroD || 400;
let demo2NumeroE = numeroE || 500;
let demo2Objeto = objeto || { a: 100 };
let demo2Array = array || [10];

console.log("\nEJEMPLO N°2: Uso de ||");
console.log('demo2TextoA:', demo2TextoA);
console.log('demo2TextoB:', demo2TextoB);
console.log('demo2Booleano:', demo2Booleano);
console.log('demo2NumeroA:', demo2NumeroA);
console.log('demo2NumeroB:', demo2NumeroB);
console.log('demo2NumeroC:', demo2NumeroC);
console.log('demo2NumeroD:', demo2NumeroD);
console.log('demo2NumeroE:', demo2NumeroE);
console.log('demo2Objeto:', demo2Objeto);
console.log('demo2Array:', demo2Array);