const colores = ["verde", "rojo", "azul"];
console.table(colores);

// Agrega un elemento al final del array
colores.push("blanco");
console.log('Método push', colores);

// Agrega un elemento al principio del array
colores.unshift("negro");
console.log('Método unshift', colores);

// Quita un elemento que está en el final del array
colores.pop();
console.log('Método pop', colores);


// Quita un elemento que está en el principio del array
colores.shift();
console.log('Método shift', colores);

// Reemplaza un elemento en específico del array
colores[1] = "gris";
console.log('Reemplazo', colores);