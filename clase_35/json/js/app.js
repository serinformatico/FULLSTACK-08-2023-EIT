const person = {
    name: "Juan",
    age: 21,
    married: false,
    hobbie: null
};

// Convertir un objeto a cadena JSON
const personJSON = JSON.stringify(person);
console.log('Cadena JSON: ', personJSON);

// Convertir una cadena JSON a objeto (ordena alfabéticamente las propiedades)
const personJS = JSON.parse(personJSON);
console.log('Objeto JS: ', personJS);


const colors = ['rojo', 'verde', 'negro'];

// Convertir un array a cadena JSON
const colorsJSON = JSON.stringify(colors);
console.log('Cadena JSON: ', colorsJSON);

// Convertir una cadena JSON a array
const colorsJS = JSON.parse(colorsJSON);
console.log('Objeto JS: ', colorsJS);
