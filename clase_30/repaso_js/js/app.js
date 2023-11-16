// Variables de Scope Global
let a = 1;
let b = "1";
let c; // undefined
let d = null;
let saludo = "Hola";
const despedida = "Chau";
const colores = ['verde', 'grís'];

function probar() {
    let e = 10; // Variable de Scope Local
    let f = "5";

    e += a; // e = e + a; -> 11
    e += Number(f); // e = e + f; casting -> 16
    e += b; // e = e + b; concatenación -> 161
    console.log(e);

    saludo += " Mundo";

    console.log(saludo);

    // no se puede re-asignar un valor a una constante: despedida += "gente";
    console.log(despedida);

    colores[2] = "blanco"; // Mutable: Agregue el valor "blanco" en el índice 2
    // no se puede cambiar el array de una constante pero si se puede agregar o
    // quitar elementos al array: colores = ['verde', 'grís', "blanco"]; // Inmutable
    console.table(colores);

    if (a === b) {
        console.log(a + " es igual a " + b);
    } else {
        console.log(a + " no es exactamente igual a " + b);
    }
}

