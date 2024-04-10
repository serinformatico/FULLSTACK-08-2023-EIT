const sumar = (a, b) => {
    return a + b;
};

const restar = (a, b) => {
    if (a < 0 || a < b) {
        throw new Error("El resultado de la resta no puede ser negativo");
    }

    return a - b;
};

const multiplicar = (a, b) => {
    return a * b;
};

const dividir = (a, b) => {
    if (b === 0) {
        throw new Error("No podes dividir en 0");
    }

    return a / b;
};

module.exports = { sumar, restar, multiplicar, dividir };