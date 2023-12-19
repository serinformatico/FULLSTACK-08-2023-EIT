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