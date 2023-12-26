import { person } from "./data.js";
import { setDataType } from "./helpers.js";

/*
    La propiedad sessionStorage es un objeto de almacenamiento en el lado del cliente
    que permite a una aplicación web almacenar datos de manera temporal durante la
    duración de una sesión.
*/

// Agregar un ítem
window.sessionStorage.setItem("marca", "Fiat");

// Agregar un segundo ítem tipo objeto
window.sessionStorage.setItem("person", JSON.stringify(person));

// Modificar un ítem
window.sessionStorage.setItem("marca", "Ford");

// Obtener un ítem
const marca = setDataType(window.sessionStorage.getItem("marca"));
console.log(marca);

// Quitar un ítem
window.sessionStorage.removeItem("marca");

// Quitar todos los ítems
// window.sessionStorage.clear();



/* ************************ EJEMPLO DE USO ************************ */
const body = document.querySelector("body");
const inputThema = document.getElementById("thema");

const setThemaDark = (checked) => {
    if (checked) {
        body.classList.add("theme--dark");
    } else {
        body.classList.remove("theme--dark");
    }
};

inputThema.onclick = (event) => {
    const checked = event.target.checked;

    setThemaDark(checked);
    window.sessionStorage.setItem("theme-dark", String(checked));
};

window.onload = () => {
    const checked = setDataType(window.sessionStorage.getItem('theme-dark'));

    setThemaDark(checked);
    inputThema.checked = checked;
};