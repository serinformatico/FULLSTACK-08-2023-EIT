/*
    JWT: Es un estándar abierto (RFC 7519) que define un formato compacto y autónomo
    para transmitir de forma segura la información entre partes como un objeto JSON.
    Este token se utiliza para la autenticación y autorización entre las Apps y API.

    Un JWT consta de tres partes separadas por puntos:
        1. Encabezado (header): Contiene el tipo del token y el algoritmo de la firma.
        2. Carga útil (payload): Es la parte donde se incluye la información que se
           quiere transmitir, como datos de usuario o autorización.
        3. Firma (signature): Es una combinación codificada de las dos partes anteriores
           utilizando un algoritmo de cifrado específico. Esta firma se utiliza para
           verificar la integridad del token y asegurar que no ha sido alterado.

    Instalación:
        npm install jsonwebtoken
*/

const jwt = require("jsonwebtoken");

const generateToken = (username, isAdmin) => {
    const payload = {
        username,
        isAdmin,
    };

    const options = {
        expiresIn: "30000s",
    };

    return jwt.sign(payload, process.env.SECRET_KEY, options);
};

const verifyToken = (req, res, next) => {
    const authorizationHeader = req.headers["authorization"];;
    const token = authorizationHeader?.split(" ")[1];

    if (!token) return res.status(400).send("Token no encontrado");

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        // En el caso de que las credenciales proporcionadas sean inválidas,
        // se envía una respuesta de error con el código HTTP 401.
        if (error) {
            return res.status(401).send(`<h1>Sistema Wep</h1><p>${error.message}</p>`);
        }

        // Se agregan datos en la request
        req.username = decoded.username;
        req.isAdmin = decoded.isAdmin;

        // Se pasa al siguiente middleware
        next();
    });
};

const checkRole = (req, res, next) => {
    // En el caso de que las credenciales proporcionadas sean válidas pero
    // el rol no tenga los privilegios de acceso, se envía una respuesta
    // de error con el código HTTP 403.
    if (!req?.isAdmin) {
        return res.status(403).send("<h1>Sistema Wep</h1><p>No tenes los privilegios</p>");
    }

    // Se pasa al siguiente middleware
    next();
};

module.exports = { generateToken, verifyToken, checkRole };