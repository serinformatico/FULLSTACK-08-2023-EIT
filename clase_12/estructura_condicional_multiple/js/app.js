const ARGENTINA = "AR";

let puntaje = Number(window.prompt("Indica tu puntaje actual:"));
let nivelActual = null;
let nacionalidad = ARGENTINA;

// Estructura condicional múltiple
if (puntaje <= 1000) {
    nivelActual = "Estas en el nivel 1";
} else if (puntaje > 1000 && puntaje <= 2000) {
    nivelActual = "Estas en el nivel 2";
} else if (puntaje > 2000 && puntaje <= 3000) {
    nivelActual = "Estas en el nivel 3";
} else {
    nivelActual = "Estas en el último nivel";
}

window.document.write(nivelActual);
window.document.write("<p>Tipo de datos de puntaje: " + typeof(puntaje) + "</p>");

if (nacionalidad === ARGENTINA || puntaje > 3000) {
    alert("Clasificaste al torneo argentino");
}
