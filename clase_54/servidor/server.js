/*
    NODE JS: Ejemplo que demuestra el uso del módulo http.

    Grupos de códigos de estado de respuesta HTTP:
        Respuestas informativas (100–199),
        Respuestas satisfactorias (200–299),
        Redirecciones (300–399),
        Errores en los clientes (400–499),
        Errores en los servidores (500–599).

    Principales códigos de estado de respuesta HTTP:
        200 Ok
        201 Created
        400 Bad request
        401 Unauthorized (autenticación)
        403 Forbidden (permisos)
        404 Not found
        409 Conflict
        500 Internal Server Error
*/

const http = require('http');
const PORT = 3000;
const HOST = "127.0.0.1";

// Creación del servidor HTTP
const server = http.createServer((request, response) => {
    // Definición de la URL
    const url = new URL(request.url, `http://${request.headers.host}`);

    // Definición de endpoints
    if (url.pathname === '/ejemplo/text') {
        response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
        response.end('Bienvenidos. Esto es una demostración');
    } else if (url.pathname === '/ejemplo/html') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf8' });
        response.end('<div><h1>Bienvenidos</h1><p>Esto es una demostración</p></div>');
    } else if (url.pathname === '/ejemplo/json') {
        const objeto = {
            bienvenida: "Bienvenidos",
            descripcion: "Esto es una demostración",
        };

        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(objeto, null, '\t'));
    } else {
        // Definición de página de respuesta para endpoints inexistentes
        response.writeHead(404, { 'Content-Type': 'text/html; charset=utf8' });
        response.end(`<h1>${http.STATUS_CODES[404]}</h1><p>Probando el módulo HTTP</p>`);
    }
});

// Método oyente de solicitudes
server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}/ejemplo`));