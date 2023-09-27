// Selector del primer elemento HTML por el nombre de la etiqueta
let parrafo1 = document.querySelector("p");
console.log(parrafo1.innerHTML);
parrafo1.innerHTML = "Hola Mundo párrafo 1"

// Selector de múltiples elementos HTML por el nombre de la etiqueta
let parrafoMultiple = document.querySelectorAll("p");
console.log(parrafoMultiple[4].innerHTML);
parrafoMultiple[4].innerHTML = "Hola Mundo Múltiple"

// Selector del primer elemento HTML por el nombre de la clase
let elementoConClase = document.querySelector(".resaltado");
console.log(elementoConClase.innerHTML);
elementoConClase.innerHTML = "Cambió el texto";

// Selector de un elemento HTML por el nombre de ID
let elementoPorId = document.querySelector("#parrafo4");
console.log(elementoPorId);
elementoPorId.innerHTML = "Bienvenidos";