const getCoches = (req, res) => {
    res.set({ "Content-Type": "application/json" });
    res.status(200).send("Obtener todos los coches");
};

const createCoche = (req, res) => {
    res.set({ "Content-Type": "application/json" });
    res.status(200).send("Crear un coche");
};

module.exports = { getCoches, createCoche};