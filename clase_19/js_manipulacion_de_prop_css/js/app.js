/* ************ Manipulación de propiedades CSS ************ */
const tituloDeArticulo1 = document.querySelector("#id-article h3");
const parrafoDeArticulo1 = document.querySelector("#id-article p");
const agregarEstilosDeArticulo1 = document.querySelector("#id-article button:first-of-type");
const quitarEstilosDeArticulo1 = document.querySelector("#id-article button:last-of-type");

function agregarEstilos() {
    //let estilos = parrafoDeArticulo1.getAttribute("style");
    //parrafoDeArticulo1.setAttribute("style", estilos + "background-color: beige;")

    tituloDeArticulo1.style.setProperty("text-shadow", "1px 1px 3px gray");
    parrafoDeArticulo1.style.setProperty("text-shadow", "1px 1px 3px black");
    parrafoDeArticulo1.style.setProperty("font-size", "2em");
    parrafoDeArticulo1.style.setProperty("color", "blue");
}

function quitarEstilos() {
    tituloDeArticulo1.style.removeProperty("text-shadow");
    parrafoDeArticulo1.style.removeProperty("font-size");
}

agregarEstilosDeArticulo1.onclick = agregarEstilos;
quitarEstilosDeArticulo1.onclick = quitarEstilos;