const xhr = new XMLHttpRequest();

// Ejemplo de pasaje de un parámetro en la URL
//xhr.open('get', 'https://randomuser.me/api?results=3');

// Ejemplo de pasaje de dos parámetros en la URL
xhr.open('get', 'https://randomuser.me/api?results=5&gender=female');

xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.response);
        console.log("Respuesta: ", response);

        const p = document.createElement("p");
        p.innerText = response.results[0].email;
        demo.appendChild(p);
    }
});

xhr.send();