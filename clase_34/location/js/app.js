/*
    El objeto location es un objeto que contiene información acerca de la
    ubicación HTTP actual de la página.
*/


// Retorna el string de la URI absoluta
console.log("URI: ", location.href);

/*
    Agregar en la URI los parámetros y un identificador de sección (al final)
        #id-seccion
        ?saludo=hola&despedida=chau
*/

// Retorna el string del identificador de sección incluyendo el sígno hash #
console.log("sección: ", location.hash);

// Retorna el string de parámetros de la URI incluyendo el sígno de pregunta ?
console.log("parámetros: ", location.search);

// Retorna el string del dominio mas el puerto
console.log("host: ", location.host);

// Retorna el string solamente del dominio
console.log("dominio: ", location.hostname);

// Retorna el string de la URL (no incluye el protocolo, hash, dominio ni parámetros)
console.log("ruta: ", location.pathname);

