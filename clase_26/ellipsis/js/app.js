const paragraph4 = document.querySelector("#id-parrafo4");
const buttonShow = document.querySelector("#id-show");

function show() {
    paragraph4.className = "parrafo4-short";
    buttonShow.innerHTML = "Ver más";
    buttonShow.onclick = hide;
}

function hide() {
    paragraph4.className = "";
    buttonShow.innerHTML = "Ver menos";
    buttonShow.onclick = show;
}

// Se define el valor por defecto (se ejecuta solo al cargar la página)
buttonShow.onclick = hide;