/*
    Importante: En la collection products, se debe crear un índice de tipo unique
    para el campo "id" y otro índice común para el campo "name".

    Comandos para crear índices:
        db.products.createIndex({ "id": 1 }, { name: "idx_id", unique: true })
        db.products.createIndex({ "name": "text" }, { name: "idx_name" })
*/

const path = require("path");
const { getSession, getCollection, generateId } = require("../connectionDB.js");
const { deleteFile } = require("../fileSystem.js");

const { HEADER_CONTENT_TYPE } = require("../constants/headers.js");
const { ERROR_ID_NOT_FOUND, ERROR_IDS_NOT_FOUND, ERROR_UPLOAD_NULL, ERROR_SERVER } = require("../constants/messages.js");
const { DIR_IMAGES_PATH } = require("../constants/paths.js");
const { normalizeText } = require("../helpers/string.helper.js");

const createSchema = (values) => {
    const { id, name, description, imageFileName, stock, price, isPromotion } = values;

    return {
        id: Number(id),
        name: normalizeText(name),
        description: description?.trim() ?? null,
        imageFileName,
        stock: Number(stock),
        price: Number(price),
        isPromotion: Boolean(isPromotion),
    };
};

const deleteImage = (imageFileName) => {
    if (imageFileName && imageFileName.length > 0) {
        const filePath = path.join(DIR_IMAGES_PATH, imageFileName);

        if (imageFileName != "default.jpg") {
            deleteFile(filePath);
        }
    }
};

// Controlador para obtener los productos
const getAll = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { search } = req.query;
        const filters = {};

        if (search) {
            filters["$or"] = [{ id: Number(search) }, { name: { $regex: normalizeText(search), $options: "i" } }];
        }

        const collection = await getCollection("products");
        const products = await collection.find(filters).hint("idx_id").hint("idx_name").sort({ name: 1 }).toArray();

        res.status(200).send({ success: true, data: products });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

// Controlador para obtener un producto en específico
const getOne = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { id } = req.params;

        const collection = await getCollection("products");
        const product = await collection.findOne({ id: Number(id) });

        if (!product) return res.status(404).send({ success: false, message: ERROR_ID_NOT_FOUND });

        res.status(200).send({ success: true, data: product });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

// Controlador para crear un producto
const create = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const collection = await getCollection("products");
        const id = await generateId(collection);
        const product = createSchema({ id, ...req.body });
        await collection.insertOne(product);

        res.status(201).send({ success: true, data: product });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

// Controlador para modificar un producto en específico
const update = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { id } = req.params;

        const collection = await getCollection("products");
        const product = await collection.findOne({ id: Number(id) });

        if (!product) {
            deleteImage(req.body.imageFileName);
            return res.status(404).send({ success: false, message: ERROR_ID_NOT_FOUND });
        };

        const values = createSchema({ id, ...req.body });
        await collection.updateOne({ id: values.id }, { $set: values });

        if (product.imageFileName != req.body?.imageFileName) {
            deleteImage(product.imageFileName);
        }

        res.status(200).send({ success: true, data: values });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

// Controlador para descontar stock de productos
const decreaseStock = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        // Abre una sesión para trabajar con transacciones. Una transacción es una
        // operación que agrupa una serie de operaciones individuales en una única
        // unidad. Estas operaciones pueden incluir inserciones, actualizaciones,
        // eliminaciones y consultas de documentos en una o más colecciones.
        const session = getSession();
        session.startTransaction();

        const { products } = req.body;
        const productsDB = [];
        const collection = await getCollection("products");

        for (const product of products) {
            const productDB = await collection.findOne({ id: Number(product.id) });

            if (!productDB) return res.status(404).send({ success: false, message: ERROR_IDS_NOT_FOUND });
            if (productDB.stock < Number(product.amount)) return res.status(404).send({ success: false, message: "Stock insuficiente" });

            const values = createSchema({ ...productDB, stock: productDB.stock-Number(product.amount) });
            productsDB.push(values);
            await collection.updateOne({ id: values.id }, { $set: values });
        }

        // Confirma la transacción (confirma todas las operaciones individuales).
        await session.commitTransaction();

        res.status(200).send({ success: true, data: productsDB });
    } catch (error) {
        // Descarta la transacción (descarta todas las operaciones individuales).
        await session.abortTransaction();
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

// Controlador para eliminar un producto en específico
const remove = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { id } = req.params;

        const collection = await getCollection("products");
        const product = await collection.findOne({ id: Number(id) });

        if (!product) return res.status(404).send({ success: false, message: ERROR_ID_NOT_FOUND });

        await collection.deleteOne({ id: Number(id) });

        deleteImage(product.imageFileName);

        res.status(200).send({ success: true, data: product });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

// Controlador para verificar la subida de la imagen del producto
const uploadImage = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const file = req.file;

        if (!file) {
            return res.status(400).send({ success: false, message: ERROR_UPLOAD_NULL });
        }

        res.status(201).send({ success: true, data: file });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

module.exports = { getAll, getOne, create, update, decreaseStock, remove, uploadImage };