// Declaración de un evento por medio del atributo HTML
const inputA = document.getElementById("id-contador-a");
const buttonA = document.getElementById("id-btn-incrementar-a");

const incrementarA = () => {
    inputA.value = parseInt(inputA.value) + 1;
};


// Declaración de un evento por medio del objeto onclick
const inputB = document.getElementById("id-contador-b");
const buttonB = document.getElementById("id-btn-incrementar-b");

const incrementarB = () => {
    inputB.value = parseInt(inputB.value) + 1;
};

buttonB.onclick = incrementarB;


// Declaración de un evento por medio de un oyente
const inputC = document.getElementById("id-contador-c");
const buttonC = document.getElementById("id-btn-decrementar");

const decrementar = () => {
    inputC.value = parseInt(inputC.value) - 1;
};

// Este método agrega el oyente de evento clic en el elemento buttonC.
buttonC.addEventListener('click', decrementar);

// Este método quita el oyente de evento clic en el elemento buttonC.
// buttonC.removeEventListener('click', decrementar);


// Ejemplo que detiene la propagación de evento
const divA = document.getElementById("id-cuadrado-a");
const divB = document.getElementById("id-cuadrado-b");
const divC = document.getElementById("id-cuadrado-c");

divA.addEventListener('click', () => {
    const p = document.createElement("p");
    p.innerText = "Evento de div A"
    divA.appendChild(p);
});

divC.addEventListener('click', (event) => {
    const p = document.createElement("p");
    p.innerText = "Evento de div B"
    divA.appendChild(p);
    // El método stopPropagation detiene la propagación ascendente del evento
    // en los contenedores padres.
    event.stopPropagation();
});


// Ejemplo que detiene el submit de un formulario
const inputWithSubmit = document.getElementById("id-contador-submit");
const buttonWithSubmitA = document.getElementById("id-submit-decrementar-a");
const buttonWithSubmitAB = document.getElementById("id-submit-decrementar-b");

buttonWithSubmitA.addEventListener('click', (event) => {
    event.preventDefault(); // Esto detiene el evento submit
    inputWithSubmit.value = parseInt(inputWithSubmit.value) - 1;
});

buttonWithSubmitAB.addEventListener('click', (event) => {
    event.preventDefault();
    inputWithSubmit.value = parseInt(inputWithSubmit.value) - 1;
});

/*
    Importante: en el caso de usar el elmento <button> dentro de un formulario,
    se debe tener en cuenta que al hacer clic se dispara el evento submit. Esto
    puede generar un efecto no deseado en nuestro proceso.
    Se desactiva por medio del objeto event y el método preventDefault.
*/


// Ejemplo que valioda un input al perder el foco
const input = document.getElementById("id-input-validate");
const inputError = document.getElementById("id-input-error");

input.addEventListener('blur', () => {
    if (!input.value) {
        input.style.borderColor = "red";
        inputError.innerText = "No se aceptan valores vacío";
    } else {
        input.style.borderColor = "green";
        inputError.innerText = "";
    }
});