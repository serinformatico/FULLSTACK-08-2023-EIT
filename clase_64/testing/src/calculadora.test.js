const { sumar, restar, multiplicar, dividir } = require("./calculadora.js");

// CASOS FELICES
test("Sumar 2 + 3 debe ser igual a 5", () => {
    const result = sumar(2, 3);
    expect(result).toBe(5);
});

test("Restar 10 - 3 debe ser igual a 7", () => {
    const result = restar(10, 3);
    expect(result).toBe(7);
});

test("Multiplicar 5 * 3 debe ser igual a 15", () => {
    const result = multiplicar(5, 3);
    expect(result).toBe(15);
});

test("Dividir 10 / 2 debe ser igual a 5", () => {
    const result = dividir(10, 2);
    expect(result).toBe(5);
});

// CASOS INFELICES
test("Dividir 10 / 0 debe generar un mensaje de error 'No podes dividir en 0'", () => {
    expect(() => dividir(10, 0)).toThrow("No podes dividir en 0");
});

test("Restar 2 - 5 debe generar un mensaje de error 'El resultado de la resta no puede ser negativo'", () => {
    expect(() => restar(2, 5)).toThrow("El resultado de la resta no puede ser negativo");
});