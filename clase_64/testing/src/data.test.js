const { persona, colores } = require("./data.js");

// CASOS FELICES
test("El objeto Persona debe tener el nombre 'Juan' y la edad '21'", () => {
    const result = persona();
    expect(result).toEqual({
        nombre: "Juan",
        edad: 21,
    });
});

test("El array colores debe tener los valores 'rojo', 'azul', 'blanco', 'negro'", () => {
    const result = colores();
    expect(result).toEqual([ "rojo", "azul", "blanco", "negro" ]);
});

test("El array colores debe contener el color 'negro'", () => {
    const result = colores();
    expect(result).toContain("negro");
});

test("El array colores debe contener al menos un elemento", () => {
    const result = colores().length;
    expect(result).toBeGreaterThan(0);
});

// CASOS INFELICES
test("El objeto Persona debe fallar cuando el nombre está en minusculas", () => {
    const nombre = persona().nombre;
    const edad = persona().edad;
    expect(nombre).not.toEqual("juan");
    expect(edad).toEqual(21);
});