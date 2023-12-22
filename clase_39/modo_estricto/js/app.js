"use strict";

// En modo estricto, esto lanza un error porque "a" no esta declarado.
a = 20;

// En modo estricto y en la versión ECMAScript 5, esto lanza un error
// porque no se puede denominar a una variable o función como undefined
// o Infinity ya que ambas son palabras reservadas. Hoy en día, esto no
// está permitido.
let undefined = 20;
function Infinity() {
    console.log("Hola");
}

// En modo estricto, esto lanza un error porque no se puede repetir el
// nombre de los parámetros.
function sumar(a, a, c) {
    return a + a + c;
}
sum(1, 2, 3);


// Parámetros con valores por defecto (se ubican de derecha a izquierda).
function multiplicar(a, b = 0, c = 10) {
    console.log(a * b * c);
}

// La funciones que tienen parámetros con valores por defecto permiten
// establecer un valor para aquellos parámetros que no se declaren.
multiplicar(10, 5, 3);
multiplicar(10, 5);
multiplicar(20);