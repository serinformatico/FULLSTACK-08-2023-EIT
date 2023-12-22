// IIFE (Immediately Invoked Function Expression) son funciones que
// se ejecutan tan pronto como se definen. Se puede decir que es un
// patrón de diseño conocido cómo función autoejecutable.
(function saludar() {
    console.log("Hola Mundo");
})()


// El Patrón Módulo Revelador es un módulo en donde se encapsula parte
// de la lógica de nuestra aplicación. Dentro de este módulo, estarán
// declaradas todas las variables o funciones privadas y sólo serán
// visibles dentro del mismo. Este ejemplo está combinado con IIFE.
const calculadora = (function () {
    // Variable privada
    const version = "2.0";

    // Función privada autoejecutada
    (function mostrarPresentacion() {
        console.log(`App Calculadora ${version}`);
    })()

    function sumar(numeroA, numeroB) {
        return numeroA + numeroB;
    }

    function restar(numeroA, numeroB) {
        return numeroA - numeroB;
    }

    function multiplicar(numeroA, numeroB) {
        return numeroA * numeroB;
    }

    function dividir(numeroA, numeroB) {
        return numeroA / numeroB;
    }

    // Retorno de funciones que requerimos hacer públicas
    return {
        sumar,
        restar,
        multiplicar,
        dividir,
    }
})();

let resultado1 = calculadora.sumar(10, 20);
console.log(resultado1);

let resultado2 = calculadora.multiplicar(10, 20);
console.log(resultado2);