/*
    Una función que está declarada con palabra reservada async, significa
    que la misma es asíncrona. En cambio, el operador await es usado par
    esperar a una Promise. Sólo puede ser usado dentro de una función asíncrona.
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
const promiseA = new Promise((resolve, reject) => {
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
const promiseB = (country) => new Promise((resolve, reject) => {
    setTimeout(() => {
        const provinces = getProvince(country.toLowerCase());

        if (provinces) {
            resolve(provinces);
        } else {
            reject(new Error("Error. Provincias no encontradas"));
        }
    }, 2000);
});



/* *************** EJECUCION DE PROMESA (incorrecta) *************** */
function executePromiseX() {
    const country = promiseA;
    console.log('executePromiseX: ', country);
}
executePromiseX();



/* ************** EJECUCION DE PROMESA (async/await) *************** */
async function executePromiseA() {
    try {
        const country = await promiseA;
        console.log('executePromiseA: ', country);
    } catch (error) {
        console.log('executePromiseA - Error: ', error.message);
    }
}
executePromiseA();



// // ********* EJECUCION SECUENCIAL DE PROMESAS (async/await) ******** */
async function executePromises() {
    try {
        const country = await promiseA;
        const provinces = await promiseB(country);
        console.log('executePromises: ', provinces);
    } catch (error) {
        console.log('executePromises - Error: ', error.message);
    }
}
executePromises();