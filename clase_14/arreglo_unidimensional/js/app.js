// Array Unidimensional o Vector
const paises = ["Argentina", "Chile", "Colombia", "Uruguay", "Perú"]; // Esto es mutable
const x = 5; // Esto es inmutable

// Esto no se puede hacer: paises = [1, 2];

document.write("<p>Pais: " + paises[1] + "</p>");
console.log(paises);

document.write("</br>");

paises[1] = "Paraguay" // Reasignación del valor

document.write("<p>Pais: " + paises[1] + "</p>");
console.log(paises);

document.write("</br>");

// Lectura completa: Por medio de un recorrido del vector
let logitudDePaises = paises.length; // retorna un 5
for (let i = 0; i < logitudDePaises; i++) {
    document.write("<p>País N°" + i + ": " + paises[i] + "</p>");
}