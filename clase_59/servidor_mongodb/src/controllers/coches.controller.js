const { desconnect, getCollection, generateId } = require("../connection_db.js");
const { HEADER_CONTENT_TYPE } = require("../constants/headers.js");

const {
    ERROR_ID_NOT_FOUND,
    ERROR_DATA_MISSING,
    ERROR_SERVER,
} = require("../constants/messages.js");

const createSchema = (body) => {
    const { marca, modelo, anio, image } = body;

    return {
        marca,
        modelo,
        anio: Number(anio),
        image: image ?? null,
    };
};

// Controller para obtener coches
const getCoches = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { marca, modelo, anio } = req.query;
        const filters = {};

        if (marca) filters.marca = { $regex: marca, $options: "i" };
        if (modelo) filters.modelo = { $regex: modelo, $options: "i" };
        if (anio) filters.anio = Number(anio);

        const collection = await getCollection("coches");
        const coches = await collection.find(filters).sort({ marca: 1 }).toArray();

        res.status(200).send(coches);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await desconnect();
    }
};

// Controller para obtener un coche en específico
const getCoche = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { id } = req.params;

        const collection = await getCollection("coches");
        const coche = await collection.findOne({ id: Number(id) });

        if (!coche) return res.status(400).send({ message: ERROR_ID_NOT_FOUND });

        res.status(200).send(coche);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await desconnect();
    }
};

// Controller para crear un coche
const createCoche = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { marca, modelo, anio } = req.body;

        if (!marca || !modelo || !anio) return res.status(400).send({ message: ERROR_DATA_MISSING });

        const collection = await getCollection("coches");
        const id = await generateId(collection);
        const coche = { id, ...createSchema(req.body) };
        await collection.insertOne(coche);

        res.status(201).send(coche);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await desconnect();
    }
};

// Controller para modificar un coche en específico
const updateCoche = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { id } = req.params;
        const { marca, modelo, anio } = req.body;

        if (!marca || !modelo || !anio) return res.status(400).send({ message: ERROR_DATA_MISSING });

        const collection = await getCollection("coches");
        const coche = await collection.find({ id: Number(id) }).toArray();

        if (coche.length === 0) return res.status(400).send({ message: ERROR_ID_NOT_FOUND });

        await collection.updateOne({ id: Number(id) }, { $set: createSchema(req.body) });

        res.status(200).send({ id: Number(id), ...createSchema(req.body) });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await desconnect();
    }
};

// Controller para eliminar un coche en específico
const deleteCoche = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { id } = req.params;

        const collection = await getCollection("coches");
        const coche = await collection.find({ id: Number(id) }).toArray();

        if (coche.length === 0) return res.status(400).send({ message: ERROR_ID_NOT_FOUND });

        await collection.deleteOne({ id: Number(id) });

        res.status(200).send(coche);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: ERROR_SERVER });
    } finally {
        await desconnect();
    }
};

module.exports = { getCoches, getCoche, createCoche, updateCoche, deleteCoche };