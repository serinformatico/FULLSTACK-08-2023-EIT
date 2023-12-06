/* ******************* AJAX - Ejemplo de error de CORS ******************* */
const xhr = new XMLHttpRequest();
xhr.open('get', 'https://www.flickr.com/services/feeds/photos_public.gne?format=json');

xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        console.log("Petición Real");
    }
});

xhr.send();


/* **************** JSONP - Alternativa para evitar CORS **************** */
const demo = document.getElementById("demo");

function handleDataJSONP(data) {
    const p = document.createElement("p");
    p.innerText = data.items[0].author;
    demo.appendChild(p);
    console.log(data);
}