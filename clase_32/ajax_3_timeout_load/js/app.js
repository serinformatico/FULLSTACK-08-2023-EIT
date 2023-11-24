const xhr = new XMLHttpRequest();
xhr.open('get', './files/saludo.txt');

xhr.addEventListener('timeout', () => {
    console.log("La petición ha excedido el tiempo de respuesta");
});

xhr.timeout = 1; // Milisegundos

xhr.addEventListener('load', () => {
    console.log(xhr);
});

xhr.send();