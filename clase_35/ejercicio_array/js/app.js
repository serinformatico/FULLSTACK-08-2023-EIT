const listColors = document.getElementById("list-colors");
const newColor = document.getElementById("new-color");
const btnAddColor = document.getElementById("btn-add-color");

const colors = ["rojo", "verde", "azul", "negro"];

// Transforma a mayúsculas el valor de cada elemento del array.
const colorsToUpper = colors.map((color) => color.toLocaleUpperCase());

// Agrega un oyente del evento click al botón "Agregar Color".
btnAddColor.addEventListener('click', () => {
    // Comprueba de que haya un valor ingresado en el input.
    if (newColor.value) {
        // Agrega el nuevo color al array.
        colorsToUpper.push(newColor.value.toUpperCase());

        // Resetea el valor del input.
        newColor.value = "";

        // Recarga los elementos de la lista HTML.
        loadElements();
    }
});

// Función que carga los elementos de la lista HTML.
function loadElements() {
    // Resetea la lista HTML.
    listColors.innerHTML = "";

    // Recorre el array de colore con el fín de crear un nuevo elemento HTML dentro
    // de la lista HTML. Esto lo hace por cada elemento del array.
    colorsToUpper.forEach((text, index) => {
        // Crea un elemento HTML li
        const li = document.createElement("li");
        li.innerText = text;

        // Crea un elemento HTML button
        const button = document.createElement("button");
        button.innerText = "Quitar";
        button.style.margin = "2px 5px";
        button.id = index;
        button.onclick = removeColor;

        // Añade los elementos a la lista HTML
        li.appendChild(button);
        listColors.appendChild(li);
    });
}

loadElements();

// Función que elimina un elemento en específico de la lista HTML.
function removeColor(e) {
    let index = e.target.id;
    colorsToUpper.splice(index, 1);
    loadElements();
}