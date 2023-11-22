// Declaración de un evento por medio del atributo HTML
const alto = document.getElementById("id-alto");
const ancho = document.getElementById("id-ancho");

const incrementarA = () => {
    inputA.value = parseInt(inputA.value) + 1;
};

window.addEventListener('resize', () => {
    alto.innerText = window.innerHeight;
    ancho.innerText = window.innerWidth;
});

window.addEventListener('load', () => {
    window.alert("Hola Mundo");
    alto.style.fontWeight = "Bolder";
    ancho.style.fontWeight = "Bolder";
    alto.innerText = window.innerHeight;
    ancho.innerText = window.innerWidth;
});