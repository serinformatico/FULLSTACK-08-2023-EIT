const costos = [ 175.50, 1500, 1850, 1000, 250.25];
const colores = ["verde", "rojo", "azul", "blanco", "negro"];

/* ***************** Ejemplos de método forEach() ***************** */
colores.forEach((color) => console.log(color));


/* ***************** Ejemplos de método map() ***************** */
const coloresEnMayusculas = colores.map((color) => color.toUpperCase());
console.log('Colores en Mayúsculas', coloresEnMayusculas);

const costosIncrementados = costos.map((costo) => {
    if (costo > 1000) {
        return costo * 1.10;
    }

    return costo;
});
console.log('Costos Incrementados', costosIncrementados);


/* ***************** Ejemplos de método filter() ***************** */
const costosFiltrados = costos.filter((costo) => costo > 500);
console.log('Costos Filtrados', costosFiltrados);

const coloresFiltrados = colores.filter((color) => color.length == 5);
console.log('Colores Filtrados', coloresFiltrados);


/* ***************** Ejemplos de método reduce() ***************** */
const valorInicial = 0;
const sumatoria = costos.reduce((acumulador, valor) => acumulador + valor, valorInicial);
console.log('Sumatoria', sumatoria);

const valorInicial2 = 10000;
const sumatoria2 = costos.reduce((acumulador, valor) => {
    if (valor > 500) {
        return acumulador + valor;
    }

    return acumulador;
}, valorInicial2);

console.log('Sumatoria 2', sumatoria2);