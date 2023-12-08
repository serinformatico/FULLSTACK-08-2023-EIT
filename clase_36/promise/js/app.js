/*
    Una promesa puede presentar los siguientes estados:
        - pending (pendiente): estado inicial, ni cumplido ni rechazado.
        - fulfilled (cumplida): lo que significa que la operación se completó con éxito.
        - rejected (rechazada): lo que significa que la operación falló.
*/


const getCountry = (code) => {
    const countries = {
        '+54': "Argentina",
        '+57': "Colombia",
        '+598': "Uruguay",
    };

    return countries[code];
};

const getProvince = (country) => {
    const provinces = {
        argentina: ["Córdoba", "Buenos Aires", "Mendoza", "San Juan"],
        uruguay: ["Montevideo", "Colonia", "Canelones"],
    };

    return provinces[country];
};


/* ******************** DECLARACION DE PROMESAS ******************** */
// Promesa sin parámetros
const executePromiseA = new Promise((resolve, reject) => {
    setTimeout(() => {
        const country = getCountry('+54');

        if (country === "Argentina") {
            resolve(country);
        } else {
            reject(new Error("Error. Páis no encontrado"));
        }
    }, 1500);
});

// Promesa con un parámetro
const executePromiseB = (country) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const provinces = getProvince(country.toLowerCase());

        if (provinces) {
            resolve(provinces);
        } else {
            reject(new Error("Error. Provincias no encontradas"));
        }
    }, 2000);
});



/* *************** EJECUCION DE PROMESA UNICA *************** */
executePromiseA
    .then((data) => console.log(data))                  // Se ejecuta cuando se resuelve correctamente la promesa.
    .catch((error) => console.log(error.message))               // Se ejecuta cuando se produce un error en la promesa.
    .finally(() => console.log("Soy el finally A"));  // Se ejecuta siempre al finalizar la promesa sin importar el resultado.

console.log(executePromiseA); // Muestra la promesa en un estado de "pending"


/* ************ EJECUCION SECUENCIAL DE PROMESAS ************ */
executePromiseA
    .then((dataA) => executePromiseB(dataA))
    .then((dataB) => console.log(dataB))
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Soy el finally B"));
