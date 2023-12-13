const dropZone = document.getElementById("drop-zone");
const dropInputFile = document.getElementById("drop-input-file");

// Controlador de archivos cuando se arrastran archivos a la zona del drop.
const handleDropFiles = (files) => {
    // Resetea la zona del drop
    dropZone.innerHTML = '';

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name;
        const fileSize = (file.size / 1024).toFixed(2) + ' KB';

        // Define el incono del archivo
        const fileIcon = document.createElement('span');
        fileIcon.className = "material-symbols-outlined";
        fileIcon.innerText = "draft";

        // Define la información del archivo
        const fileData = document.createElement('p');
        fileData.innerText = `${fileName} (${fileSize})`;

        // Define el contenedor que contiene el icono y la información del archivo
        const fileContainer = document.createElement('div');
        fileContainer.className = "form__group__drop-zone--file";
        fileContainer.append(fileIcon);
        fileContainer.append(fileData);

        dropZone.append(fileContainer);
    }
}

// El evento "dragenter" se activa cuando un elemento arrastrado o una selección
// de texto ingresa a un destino de colocación válido.
dropZone.addEventListener("dragenter", (event) => {
    console.log("dragenter: Estás arrastrando algo que entró a la zona del drop");
    event.preventDefault();
});

// El evento "dragleave" se activa cuando un elemento arrastrado o una selección
// de texto deja un destino de colocación válido.
dropZone.addEventListener("dragleave", (event) => {
    console.log("dragleave: Estás arrastrando algo que salió de la zona del drop");
    event.preventDefault();
});

// El evento "dragover" se activa cuando un elemento o texto se arrastra sobre
// un destino de caída válido.
dropZone.addEventListener("dragover", (event) => {
    console.log("dragover: Estás arrastrando algo que está encima de la zona del drop");
    event.preventDefault();
});

// El evento "drop" se activa cuando un elemento o selección de texto se coloca
// en un destino de colocación válido.
dropZone.addEventListener("drop", (event) => {
    console.log("drop: Haz soltado algo que arrastraste en la zona del drop");
    event.preventDefault();

    const files = event.dataTransfer.files;

    if (files.length > 0) {
        handleDropFiles(files);
    }
});

dropInputFile.addEventListener("change", (event) => {
    const files = event.target.files;

    if (files.length > 0) {
        handleDropFiles(files);
    }
});