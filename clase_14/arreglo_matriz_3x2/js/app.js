// Matriz
const matriz = [[21, 15], [77, 50], [20, 55]];

console.table(matriz)
document.write("<p>Matriz: " + matriz[1][1] + "</p>");

document.write("</br>");

// Lectura parcial: Por medio de un recorrido de la matriz
for (let i = 0; i < matriz.length; i++) {
    document.write("<p>fila N°" + i + " - 2da Columna: " + matriz[i][1] + "</p>");
}

document.write("</br>");

// Lectura completa: Por medio de un recorrido doble anidado de la matriz
for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);

    for (let j = 0; j < matriz[i].length; j++) {
        document.write("<p>fila N°" + i + " - Columna" + j + ": "+ matriz[i][j] + "</p>");
    }
}