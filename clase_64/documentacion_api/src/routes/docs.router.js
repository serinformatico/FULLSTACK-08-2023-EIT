const Router = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");

const routes = Router();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Tienda Web",
            version: "1.0.0",
            description: "Documentación de la API para la gestión de la Tienda Web",
        },
    },
    apis: [path.join(__dirname, "*.js")],
};

const swaggerSpecification = swaggerJSDoc(options);

routes.use("/", swaggerUi.serve);
routes.get("/", swaggerUi.setup(swaggerSpecification));

module.exports = routes;