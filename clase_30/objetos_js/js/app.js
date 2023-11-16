// Declaración del objeto persona
const persona = {
    // Propiedades
    nombre: "Juan",
    edad: 21,
    // Métodos
    saludar: function() {
        return "Hola Mundo";
    },
};

console.log(persona);

// Acceder a la propiedad nombre. Se hace por medio de la notación dot (.)
console.log("Acceso a la propiedad: ", persona.nombre);

// Rea-asignar un valor a la propiedad nombre
const probarA = () => {
    persona.nombre = "Carlos";
    console.log(persona);
};

// Invocar al método saludar()
const probarB = () => {
    console.log(persona.saludar());
};


// *************** ARRAY DE OBJETOS *************** //
const jugador1 = {
    nombre: "Juan",
    numeroDeLaCamiseta: 1,
    posicion: "Arquero",
    atajar: function () {
        console.log("Atajando");
    },
    patear: function () {
        console.log("Pateando");
    },
};

const jugador2 = {
    nombre: "Pablo",
    numeroDeLaCamiseta: 2,
    posicion: "defensor",
    patear: function () {
        console.log("Pateando");
    },
    correr: function () {
        console.log("corriendo");
    },
};

const jugador3 = {
    nombre: "Pedro",
    numeroDeLaCamiseta: 10,
    posicion: "Delantero",
    patear: function () {
        console.log("Pateando");
    },
    correr: function () {
        console.log("corriendo");
    },
};

// El equipo sería un array de objetos
const equipo = [jugador1, jugador2, jugador3];
console.log(equipo);

// Acceder a la propiedad numeroDeLaCamiseta del jugador Pedro
// Ejecutar la acción correr
console.log(jugador3.numeroDeLaCamiseta);
jugador3.correr();

// Acceder por medió de array a la propiedad numeroDeLaCamiseta del jugador Pedro
// Ejecutar la acción patear
console.log(equipo[2].numeroDeLaCamiseta);
equipo[2].patear();

// Declaración de objetos dentro de un array
const colores = [
    {id: 1, nombre: "blanco"},
    {id: 2, nombre: "verde"}
];
console.log(colores[1].nombre);