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


/* ************* EJECUCION DE PROMESA (async/await) ************** */
async function executePromiseXhr(gender, results = 1) {
    try {
        const response = await promiseXhr(gender, results);
        const data = JSON.parse(response);
        console.log('executePromiseXhr: ', data);
    } catch (error) {
        console.log('executePromiseXhr - Error: ', error.message)
    }
}
executePromiseXhr('male', 3);