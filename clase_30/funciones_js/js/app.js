// Esto es una función declarada
function probarA() {
    console.log("Soy la función A");
}

// Esto es una función expresada + función nombranda.
// Es decir, que la función está dentro de una constante/variable
const probarB = function probarB() {
    console.log("Soy la función B");
}


// Esto es una función expresada + función anónima.
const probarC = function () {
    console.log("Soy la función C");
}

// Esto es una función expresada + función de flecha (arrow function).
const probarD = () => {
    console.log("Soy la función D");
}

// Esto es una función expresada + función de flecha de una sola línea (sin llaves).
const probarE = () => console.log("Soy la función E");


// Esto es una función expresada + función de flecha + retorno explicito
const sumar = (a, b) => {
    const c = a+b;
    return c; // Retorno explicito
};
console.log(sumar(5, 3));

// Esto es una función expresada + función de flecha + retorno implicito
const restar = (a, b) => a - b;
console.log(restar(5, 3));