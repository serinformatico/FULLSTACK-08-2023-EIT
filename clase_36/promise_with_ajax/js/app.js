/* **************** DECLARACION DE PROMESA - AJAX **************** */
const promiseXhr = (gender, results = 1) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('get', `https://randomuser.me/api?gender=${gender}&results=${results}`);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(new Error("Error. Resultado no encontrado"));
            }
        };

        xhr.send();
    });
};

/* ******************** EJECUCION DE PROMESA ********************* */
promiseXhr("male")
    .then((data) => JSON.parse(data))
    .then((data) => console.log(data))
    .catch((error) => console.log(error.message));