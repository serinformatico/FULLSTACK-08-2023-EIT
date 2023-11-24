const divApiInterna = document.getElementById("id-respuesta-api-interna");
const divApiExterna = document.getElementById("id-respuesta-api-externa");


/* *********** Ejemplo de Fetch a API Interna *********** */
const xhr1 = new XMLHttpRequest();
xhr1.open("get", "./files/saludo.txt");

xhr1.onload = () => {
    if (xhr1.status === 200) {
        divApiInterna.innerText = xhr1.response;
    } else if (xhr1.status === 404) {
        divApiInterna.innerText = "Recurso no encontrado";
    }
};

xhr1.onerror = () => { divApiExterna.innerText = "Error en la Solicitud" };

xhr1.send();


/* *********** Ejemplo de Fetch a API Externa *********** */
const xhr2 = new XMLHttpRequest();
xhr2.open("get", "https://pokeapi.co/api/v2/pokemon/ditto");

xhr2.onload = () => {
    const response = JSON.parse(xhr2.response);

    if (xhr2.status === 200) {
        divApiExterna.innerText = response.name;
    } else if (xhr2.status === 404) {
        divApiExterna.innerText = "404 Recurso no encontrado";
    }
};

xhr2.onerror = () => { divApiExterna.innerText = "Error en la Solicitud" };

xhr2.send();
