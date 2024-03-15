const Router = require("express");
const { validateParamId, validateBody } = require("../validations/coches.validation.js");
const { getCoches, getCoche, createCoche, updateCoche, deleteCoche } = require("../controllers/coches.controller.js");

const routes = Router();

routes
    .get("/", (req, res) => {
        getCoches(req, res);
    })
    .get("/:id", validateParamId, (req, res) => {
        getCoche(req, res);
    })
    .post("/", validateBody, (req, res) => {
        createCoche(req, res);
    })
    .put("/:id", validateParamId, validateBody, (req, res) => {
        updateCoche(req, res);
    })
    .delete("/:id", validateParamId, (req, res) => {
        deleteCoche(req, res);
    });

module.exports = routes;