let saludo1 = "Hola Mundo";
console.log(saludo1);

let saludo2 = "Buenos Días";
let saludo3 = "Buenos Tardes";
let saludo4 = "Buenos Noches";

setTimeout(() => {
    console.log(saludo2);

    setTimeout(() => {
        console.log("Timeout Aninado");
    }, 3000);
}, 2000);

let contador = 1;
const interval = setInterval(() => {
    console.log(saludo3);

    if (contador == 10) {
        // Detener el setInterval
        clearInterval(interval);
    }

    contador++;
}, 1500);


console.log(saludo4);
console.log("Mostrar el resultado de sumar 2 + 5: ", 2 + 5);

