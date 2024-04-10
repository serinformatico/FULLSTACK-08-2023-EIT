const Router = require("express");
const { validateBody } = require("../validations/shoppingCarts.validation.js");
const { getAll, create } = require("../controllers/shoppingCarts.controller.js");

const routes = Router();

routes
    .get("/", (req, res) => {
        getAll(req, res);
    })
    .post("/", validateBody, (req, res) => {
        create(req, res);
    });

module.exports = routes;