/*
    La instrucción for…in se utiliza para iterar sobre las propiedades enumerables
    de un objeto. Donde la prop es una variable que toma el valor de la propiedad
    en cada iteración y el objeto es el cual se está iterando.
*/


let person = {
    firstName: 'Juan',
    lastName: 'Medina',
    age: 30,
    address: {
        street: "Av. siempre viva",
        city: "Springfield",
        country: "USA",
    }
};


for (let property in person) {
    console.log(property + ': ' + person[property]);

    if (property === "address") {
        for (let subProperty in person[property]) {
            console.log(subProperty + ': ' + person[property][subProperty]);
        }
    }
}