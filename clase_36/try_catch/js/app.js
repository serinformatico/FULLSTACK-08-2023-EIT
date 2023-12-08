const IVA21 = 21.0;

const person = {
    name: "Juan",
    age: 21,
    address: {
        nameStreet: "x",
        country: "Argentina",
    }
};


// Acá se produce el error -> Rompe la ejecución del script
// console.log(IVA21 = 10);

// Acá se produce el error -> Rompe la ejecución del script
// console.log(person.address.province.name);

// Esta línea no se ejecutaría
// console.log("Me estoy ejecutando");

try {
    console.log(IVA21 = 10);
} catch (error) {
    console.log(`Error 1: ${error.message}`);
}

try {
    console.log(person.address.province.name);
} catch (error) {
    console.log(`Error 2: ${error.message}`);
}

console.log("Me estoy ejecutando");