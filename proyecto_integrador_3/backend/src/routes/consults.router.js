const Router = require("express");
const { validateBody } = require("../validations/consults.validation.js");
const { send } = require("../controllers/consults.controller.js");

const routes = Router();

routes
    .post("/send-mail", validateBody, (req, res) => {
        send(req, res);
    });

module.exports = routes;