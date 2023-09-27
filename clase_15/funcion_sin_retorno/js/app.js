// Esto es el Scope o alcance de las variables
let resultado = 0;
let esCorrecto = true;

if (esCorrecto) {
    let numeroA = 5;
    resultado += 10;

    if (1==1) {
        const numeroB =  3;
    }

    // La variable numeroB no tiene alcance (descomentar para probar)
    // document.write("<p>" + numeroB + "</p>");
}

// La variable numeroA no tiene alcance (descomentar para probar)
// document.write("<p>" + numeroA + "</p>");

document.write("<p>Resultado del IF: " + resultado + "</p>");


// Funciones Sin Retorno y sin parámetros
function sumar() {
    resultado = 10 + 5;
    document.write("<p>Resultado de la función: " + resultado + "</p>");
}

sumar();


// Funciones Sin Retorno y con un parámetro
const IVA210 = 21;
function calcularPrecio(costo) {
    resultado = (costo * (1 + (IVA210 /100))) * 1.30;
    document.write("<p>Resultado de la función c/param: " + resultado + "</p>");
}

calcularPrecio(100);
calcularPrecio(500);