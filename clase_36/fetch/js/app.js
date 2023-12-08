/* ****************** DECLARACION DE FETCH API ****************** */
fetch('https://randomuser.me/api?gender=male&results=3')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error. Resultado no encontrado (${response.status})`);
        }

        return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));



/* ************* DECLARACION DE FETCH (async/await) ************* */
executeFetch = async (gender, results = 1) => {
    let responseFetch = null;

    await fetch(`https://randomuser.me/api?gender=${gender}&results=${results}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error. Resultado no encontrado (${response.status})`);
            }

            return response.json();
        })
        .then((data) => {
            responseFetch = data;
        })
        .catch((error) => console.log(error));

    console.log('executeFetch: ', responseFetch);
}

executeFetch('male', 3);