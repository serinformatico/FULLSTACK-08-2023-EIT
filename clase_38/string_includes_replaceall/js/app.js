/*
    El método includes() determina si una cadena de texto puede ser
    encontrada dentro de otra cadena de texto, devolviendo true o false
    según corresponda.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
    -> se recomienda convertir en minúsculas tanto el valor como el texto buscado.
*/

const textoA = "La programación Backend es lo más";

console.log("EJEMPLO: Uso de includes");
let textoIncluyeEsteValor = textoA.includes("Backend");
console.log(textoIncluyeEsteValor);   // Imprime true (significa que lo incluye)


/*
    El método replaceAll() devuelve una nueva cadena con todas
    las coincidencias de un patrón reemplazadas por un reemplazo.
    La cadena original se deja sin cambios.
    Fuente: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

    Dato extra: Este método diferencia entre minúsculas y mayúsculas.
    Cabe aclarar que, todas las coincidencias serán reemplazadas.
*/

const textoB = "La programación Backend es lo más. I Love Backend";

console.log("EJEMPLO: Uso de replaceAll");
let textoReemplazado = textoB.replaceAll("Backend", "Frontend");
console.log(textoReemplazado);   // Imprime true (significa que lo incluye)