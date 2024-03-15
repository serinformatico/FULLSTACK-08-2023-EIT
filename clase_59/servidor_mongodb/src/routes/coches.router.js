const Router = require("express");
const { getCoches, getCoche, createCoche, updateCoche, deleteCoche } = require("../controllers/coches.controller.js");

const routes = Router();

routes
    .get("/", (req, res) => {
        getCoches(req, res);
    })
    .get("/:id", (req, res) => {
        getCoche(req, res);
    })
    .post("/", (req, res) => {
        createCoche(req, res);
    })
    .put("/:id", (req, res) => {
        updateCoche(req, res);
    })
    .delete("/:id", (req, res) => {
        deleteCoche(req, res);
    });

module.exports = routes;