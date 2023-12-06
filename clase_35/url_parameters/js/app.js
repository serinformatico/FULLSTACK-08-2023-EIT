const xhr = new XMLHttpRequest();
const divDemo = document.getElementById("demo");

// Ejemplo de pasaje de un parámetro en la URL
//xhr.open('get', 'https://randomuser.me/api?results=3');

// Ejemplo de pasaje de dos parámetros en la URL
xhr.open('get', 'https://randomuser.me/api?results=5&gender=female');

xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        const responseJS = JSON.parse(xhr.response);
        
        console.log("Respuesta: ", responseJS);

        const p = document.createElement("p");
        p.innerText = responseJS.results[2].email;
        divDemo.appendChild(p);
    }
});

xhr.send();