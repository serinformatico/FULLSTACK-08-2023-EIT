const listColors = document.getElementById("list-colors");
const newColor = document.getElementById("new-color");
const btnAddColor = document.getElementById("btn-add-color");

const modalColorEditing = document.getElementById("modal-color-editing");
const currentColor = document.getElementById("current-color");
const btnEditColor = document.getElementById("btn-edit-color");

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

let auxiliaryEditionIndex = null;
btnEditColor.addEventListener('click', () => {
    // Comprueba de que haya un valor ingresado en el input de edición.
    if (currentColor.value) {
        // Modifica el valor del elemento del array.
        colorsToUpper[auxiliaryEditionIndex] = currentColor.value;

        // Oculta el modal de edición
        modalColorEditing.setAttribute('hidden', true);

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

        // Crea un elemento HTML button (eliminar)
        const removeButton = document.createElement("button");
        removeButton.innerText = "Quitar";
        removeButton.style.margin = "2px 5px";
        removeButton.id = index;
        removeButton.onclick = removeColor;

        // Crea un elemento HTML button (modificar)
        const editButton = document.createElement("button");
        editButton.innerText = "Editar";
        editButton.style.margin = "2px 5px";
        editButton.id = index;
        editButton.onclick = selectColor;

        // Añade los elementos a la lista HTML
        li.appendChild(removeButton);
        li.appendChild(editButton);
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

// Función que modifica un elemento en específico de la lista HTML.
function selectColor(e) {
    let index = e.target.id;

    // Importante: Guarda el indice del elemento que se desea editar
    auxiliaryEditionIndex = index;

    // Rellena el input de edición con el valor que se desea editar
    currentColor.value = colorsToUpper[index];

    // Muestra el modal de edición
    modalColorEditing.removeAttribute('hidden');
    modalColorEditing.className = "modal-color-editing";
}

