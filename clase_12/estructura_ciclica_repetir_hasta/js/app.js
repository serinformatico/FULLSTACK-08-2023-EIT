let contadorA = 4;

// Estructura cíclica repetir-hasta (se garantiza al menos una ejecución del bloque interno)
do {
    document.write("<p>Iteración A " + contadorA + "</p>");
    contadorA++; // ++ incrementando en 1
} while (contadorA <= 3); // Evalua la condición al final del bloque interno de código


let contadorB = 4;
// Estructura cíclica repetir-mientras. Evalua la condición al incio del bloque interno de código
while (contadorB <= 3) {
    document.write("<p>Iteración B" + contadorB + "</p>");
    contadorB++; // ++ incrementando en 1
}

let contadorC = 1;
do {
    // Saltar la iteración actual
    if (contadorC === 4) {
        contadorC++;
        continue;
    }

    // Mostrar solo los valores pares
    if (contadorC % 2 === 0) {
        document.write("<p>Iteración C " + contadorC + "</p>");

        // Romper el buble
        if (contadorC === 8) {
            break;
        }
    }

    contadorC++;
} while (contadorC <= 20); // Evalua la condición al final del bloque interno de código


document.write("<p>Fin de instrucciones</p>");