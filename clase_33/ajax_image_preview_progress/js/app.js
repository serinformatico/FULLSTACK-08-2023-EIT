const textURL = document.getElementById("id-url");
const imagePreview = document.getElementById("id-image-preview");
const btnProcess = document.getElementById("id-btn-process");
const textResult = document.getElementById("id-result");
const progress = document.getElementById("id-progress");

btnProcess.addEventListener('click', () => {
    if (textURL.value) {
        getImage();
    } else {
        textResult.innerHTML = "Ingrese la URL de la imagen";
    }
});

function getImage() {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "blob";
    xhr.open('get', textURL.value);

    // Hace la petición a un URL externa (trae una imagen)
    xhr.onload = () => {
        const imageBlob = xhr.response;
        const imageType = imageBlob.type;

        // Verifica la correctitud de la petición y que los datos sean de tipo jpg o png.
        if (xhr.status === 200 && (imageType === "image/jpeg" || imageType === "image/png")) {
            const urlBlob = URL.createObjectURL(imageBlob);
            const img = document.createElement("img");
            img.src = urlBlob;
            img.className = "form__div__img";

            imagePreview.appendChild(img);
            textResult.innerHTML = "El proceso finalizó";

            setTimeout(() => {
                textResult.innerHTML = "";
            }, 2000);
        } else {
            textResult.innerHTML = "El proceso falló";
        }
    };

    // Muestra la barra de progreso
    xhr.onloadstart = function () {
        progress.removeAttribute('hidden');
        progress.value = 0;
    };

    // Muestra el avance de la barra de progreso y la oculta al llegar a 100.
    xhr.onprogress = function (e) {
        // Verifica que se conoce el tamaño total de la transferencia
        if (e.lengthComputable) {
            const loaded = Math.round(e.loaded * 100 / e.total);
            progress.value = loaded;

            if (progress.value === 100) {
                progress.setAttribute('hidden', 'true');
            }
        }
    };

    // Muestra un mensaje de error durante 2 segundos
    xhr.onerror = function () {
        textResult.innerHTML = "El proceso falló";

        setTimeout(() => {
            textResult.innerHTML = "";
        }, 2000);
    };

    xhr.send();
}

/*
    URL sin CORS
    https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_2901.jpg
    https://images.dog.ceo/breeds/terrier-yorkshire/20200319_143121.jpg
    https://images.dog.ceo/breeds/terrier-yorkshire/n02094433_3812.jpg
    https://images.dog.ceo/breeds/beagle/n02088364_15690.jpg
    https://images.dog.ceo/breeds/beagle/n02088364_8871.jpg
*/