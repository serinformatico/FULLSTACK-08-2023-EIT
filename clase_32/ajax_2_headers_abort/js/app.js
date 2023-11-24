const xhr = new XMLHttpRequest();
xhr.open('get', './files/saludo.xml');
xhr.setRequestHeader("content-type", "application/json"); // Tipo de contenido enviado en la solicitud

/*
    Valores del encabezado "content-type":
        application/json | application/pdf | application/xml | application/x-www-form-urlencoded
        audio/mpeg | audio/ogg | audio/wav | audio/flac | audio/aac
        image/jpeg | image/png | image/gif | image/bmp
        multipart/form-data
        text/plain | text/html | text/css | text/javascript
        video/mp4 | video/webm | video/ogg
*/

xhr.addEventListener('readystatechange', () => {
    console.log("Propiedad readyState: ", xhr.readyState);

    if (xhr.readyState === 2) {
        const contentType = xhr.getResponseHeader("content-type");
        console.log("Cabecera 'content-type': ", contentType);

        const contentLength = xhr.getResponseHeader("content-length");
        console.log("Cabecera 'content-length': ", contentLength);

        if (contentType != "text/html; charset=utf-8") {
            xhr.abort();
            console.log("Petición abortada");
        }
    }
});

xhr.send();