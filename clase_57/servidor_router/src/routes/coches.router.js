const Router = require("express");
const { getCoches, createCoche } = require("../controllers/coches.controller.js");

const routes = Router();

routes
    .get("/", (req, res) => {
        getCoches(req, res);
    })
    .post("/", (req, res) => {
        createCoche(req, res);
    })
    .put("/:id", (req, res) => {
        res.set({ "Content-Type": "application/json" });
        const { id } = req.params;
        res.status(200).send({message: "Modificar el coche ID:" + id});
    })
    .patch("/:id", (req, res) => {
        res.set({ "Content-Type": "application/json" });
        const { id } = req.params;
        res.status(200).send({message: "Actualizar un campo del coche ID:" + id});
    })
    .delete("/:id", (req, res) => {
        res.set({ "Content-Type": "application/json" });
        const { id } = req.params;
        res.status(200).send({message: "Eliminar el coche ID:" + id});
    });

module.exports = routes;