let tituloDeLaSeccion = document.querySelector("#titulo");
tituloDeLaSeccion.innerHTML = "Repaso de Selectores";

function saludar() {
    let resultado = 5 + 4;
    window.alert(resultado);
}

let edad = 15;
let resultadoPorHtml = document.querySelector("#resultado");

if (edad < 18) {
    resultadoPorHtml.innerHTML = "No podes subir";
} else if (edad >= 18 && edad <= 21) {
    resultadoPorHtml.innerHTML = "Podes subir con un acompañante";
} else if (edad > 21 && edad <= 50) {
    resultadoPorHtml.innerHTML = "Podes subir solo";
} else {
    resultadoPorHtml.innerHTML = "Podes subir con certificado de buena salud";
}

let opcion = prompt("elegí una opción entre 1 a 3");

while (opcion != 1 && opcion != 2 && opcion != 3) {
    opcion = prompt("elegí una opción entre 1 a 3");
}

console.log("Haz elegido la opción: " + opcion);

