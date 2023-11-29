const linkHome = document.getElementById("home");
const linkContact = document.getElementById("contact");
const linkProducts = document.getElementById("products");

const btnBack = document.getElementById("back");
const btnForward = document.getElementById("forward");
const btnGo = document.getElementById("go");
const inputNumberPage = document.getElementById("number-page");
const btnObject = document.getElementById("object");

// Conduce a la página anterior del historial de navegación
btnBack.addEventListener('click', () => {
    window.history.back();
});

// Conduce a la página siguiente del historial de navegación
btnForward.addEventListener('click', () => {
    history.forward();
});

// Conduce a una página del historial de navegación
// números negativos -> retroceder
// números positivos -> avanzar
btnGo.addEventListener('click', () => {
    history.go(inputNumberPage.value);
});

// Muestra el objeto history en la consola del navegador
btnObject.addEventListener('click', () => {
    console.log('objeto: ', history);
});