const xhr = new XMLHttpRequest();
console.log("a. Propiedad readyState: ", xhr.readyState);       // UNINITIALIZED

/*
    Propiedad readyState:
    0   UNINITIALIZED	Instancia creada.
    1	LOADING	        Instancia inicializada. Significa que el método open() se ha invocado.
    2	LOADED	        Headers y state están disponibles. Significa que se invocó el método send().
    3	INTERACTIVE	    Descargando; responseText contiene información parcial.
    4	COMPLETED	    La operación ha terminado. No necesariamente exitosa.
*/

// Opcionalmente, a los métodos open() y load() se le puede pasar por parámetro un usuario y password


xhr.open('get', './files/saludo.txt');
console.log("b. Propiedad readyState: ", xhr.readyState);       // LOADING

xhr.addEventListener('progress', () => {
    console.log("c. Propiedad readyState: ", xhr.readyState);   // LOADED
});

xhr.addEventListener('load', () => {
    console.log("d. Propiedad readyState: ", xhr.readyState);   // COMPLETED
});

xhr.send();

// Aquí sin el evento load, esto imprimiría "1" por problemas de sincronicidad
// console.log("c. Propiedad readyState: ", xhr.readyState);