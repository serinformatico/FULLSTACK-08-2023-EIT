// Array Bidimensional
const paisesConPoblacion = [["Argentina", 47000000], ["Chile", 19000000], ["Perú", 28300000, "altura", "moneda"]];

paisesConPoblacion[0][1] = Number(window.prompt("Ingresa la población de ARG"));

document.write("<p>Pais: " + paisesConPoblacion[0][0] + " Población: " + paisesConPoblacion[0][1] + "</p>");
document.write("<p>Pais: " + paisesConPoblacion[2][0] + " Población: " + paisesConPoblacion[2][1] + "</p>");

console.log(paisesConPoblacion);

document.write("</br>");

// Lectura parcial: Por medio de un recorrido del arreglo bidimensional
for (let i = 0; i < paisesConPoblacion.length; i++) {
    document.write("<p>Población:" + paisesConPoblacion[i][1] + "</p>");
}

document.write("</br>");

// Lectura completa: Por medio de un recorrido doble anidado del arreglo bidimensional
for (let i = 0; i < paisesConPoblacion.length; i++) {
    console.log(paisesConPoblacion[i]);

    for (let j = 0; j < paisesConPoblacion[i].length; j++) {
        document.write("<p>Valor N°" + i + "-" + j + ": " + paisesConPoblacion[i][j] + "</p>");
    }
}
