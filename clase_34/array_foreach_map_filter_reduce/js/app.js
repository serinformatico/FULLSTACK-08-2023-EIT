const costos = [ 175.50, 1500, 1850, 1000, 250.25];
const colores = ["verde", "rojo", "azul", "blanco", "negro"];

/* ***************** Ejemplos de método forEach() ***************** */

/* ***************** Ejemplos de método map() ***************** */

/* ***************** Ejemplos de método filter() ***************** */
const costosFiltrados = costos.filter((costo) => costo > 500);
console.log(costosFiltrados);

const coloresFiltrados = colores.filter((color) => color.length == 5);
console.log(coloresFiltrados);


/* ***************** Ejemplos de método reduce() ***************** */
const valorInicial = 0;
const sumatoria = costos.reduce((acumulador, valor) => acumulador + valor, valorInicial);
console.log(sumatoria);

const valorInicial2 = 10000;
const sumatoria2 = costos.reduce((acumulador, valor) => {
    if (valor > 500) {
        return acumulador + valor;
    }

    return acumulador;
}, valorInicial2);

console.log(sumatoria2);