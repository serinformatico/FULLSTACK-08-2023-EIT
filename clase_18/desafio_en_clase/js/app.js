let seccion1 = document.querySelector("#id-section1");
let button1 = document.querySelector("#id-button");

function crearTitulo(pTitulo) {
    let titulo = document.createElement('h3');
    titulo.innerText = pTitulo;
    seccion1.appendChild(titulo);
}

function crearParrafo(pParrafo) {
    let parrafo = document.createElement('p');
    parrafo.innerText = pParrafo;
    seccion1.appendChild(parrafo);
}

function crearImagen(path) {
    let imagen = document.createElement('img');
    imagen.setAttribute('src', path);
    imagen.setAttribute('alt', 'Foto de auto rojo');
    imagen.setAttribute('class', 'imagen');
    console.dir(imagen);
    seccion1.appendChild(imagen);
}

function agregar() {
    const datos = [
        ["Título de la sección", "Párrafo de la sección", './images/auto.jpg' ]
    ];

    crearTitulo(datos[0][0]);
    crearParrafo(datos[0][1]);
    crearImagen(datos[0][2]);
}

button1.onclick = agregar;
