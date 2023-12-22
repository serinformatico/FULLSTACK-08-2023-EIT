import { person } from "./data.js";
import { setDataType } from "./helpers.js";

/*
    La propiedad localStorage es un objeto de almacenamiento en el lado del cliente
    que permite a una aplicación web almacenar datos de manera local.
*/

// Agregar un ítem
window.localStorage.setItem("marca", "Fiat");

// Agregar un segundo ítem tipo objeto
window.localStorage.setItem("person", JSON.stringify(person));

// Modificar un ítem
window.localStorage.setItem("marca", "Ford");

// Obtener un ítem
const marca = setDataType(window.localStorage.getItem("marca"));
console.log(marca);

// Quitar un ítem
window.localStorage.removeItem("marca");

// Quitar todos los ítems
// window.localStorage.clear();



/* ************************ EJEMPLO DE USO ************************ */
const body = document.querySelector("body");
const inputThema = document.getElementById("thema");

const setThemaDark = (checked) => {
    if (checked) {
        body.classList.add("theme--dark");
    } else {
        body.classList.remove("theme--dark");
    }

    window.localStorage.setItem("theme-dark", checked);
};

inputThema.onclick = (event) => {
    setThemaDark(event.target.checked);
};

window.onload = () => {
    const checked = setDataType(window.localStorage.getItem('theme-dark'));
    setThemaDark(checked);

    inputThema.checked = checked;
};
