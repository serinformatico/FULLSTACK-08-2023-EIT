const Router = require("express");

const routes = Router();

routes
    .get("/", (req, res) => {
        res.set({ "Content-Type": "application/json" });
        res.status(200).send({message: "Obtener todos los usuarios"});
    })
    .post("/", (req, res) => {
        res.set({ "Content-Type": "application/json" });
        res.status(200).send({message: "Crear un usuario"});
    })
    .put("/:id", (req, res) => {
        res.set({ "Content-Type": "application/json" });
        const { id } = req.params;
        res.status(200).send({message: "Modificar el usuario ID:" + id});
    })
    .patch("/:id", (req, res) => {
        res.set({ "Content-Type": "application/json" });
        const { id } = req.params;
        res.status(200).send({message: "Actualizar un campo del usuario ID:" + id});
    })
    .delete("/:id", (req, res) => {
        res.set({ "Content-Type": "application/json" });
        const { id } = req.params;
        res.status(200).send({message: "Eliminar el usuario ID:" + id});
    });

module.exports = routes;