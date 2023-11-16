// Cuadro de diálogo de información
window.alert("Mensaje de información");

// Cuadro de diálogo de confirmación
let respuesta = window.confirm("Mensaje de confirmación");
window.document.write(respuesta); // Imprime el resultado en el HTML
console.log(respuesta); // Muestra por consola la respuesta seleccionada

// Cuadro de diálogo de entrada de dato
let entrada = window.prompt("Mensaje de entrada");
window.document.write(entrada); // Imprime el resultado en el HTML
console.log(entrada); // Muestra por consola el dato ingresado

let uri = window.location;
console.log(uri); // Muestra por consola la URI actual

// Re-direccionar a otra página web (Descomentar para propbar)
// window.location = "https://www.educacionit.com/";