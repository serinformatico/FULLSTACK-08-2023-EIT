const Router = require("express");
const { validateParamId, validateBody } = require("../validations/products.validation.js");
const { getAll, getOne, create, update, remove, uploadImage } = require("../controllers/products.controller.js");
const uploaderImage = require("../uploader.image.js");

const routes = Router();

/**
 * @swagger
 * definitions:
 *   Product:
 *     required:
 *       - name
 *       - imageFileName
 *       - stock
 *       - price
 *       - isPromotion
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       imageFileName:
 *         type: string
 *       stock:
 *         type: integer
 *       price:
 *         type: number
 *       isPromotion:
 *         type: boolean
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener productos
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Criterio de búsqueda para filtrar productos por ID o nombre
 *     responses:
 *       200:
 *         description: Retorna una lista de productos
 *       500:
 *         description: Se ha generado un error en el servidor
 */
routes.get("/", (req, res) => {
    getAll(req, res);
});

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Retorna un producto
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Se ha generado un error en el servidor
 */
routes.get("/:id", validateParamId, (req, res) => {
    getOne(req, res);
});

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Crear un nuevo producto
 *     requestBody:
 *       description: Objeto Producto
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Product'
 *     responses:
 *       201:
 *         description: Producto creado
 *       500:
 *         description: Se ha generado un error en el servidor
 */
routes.post("/", validateBody, (req, res) => {
    create(req, res);
});

routes.put("/:id", validateParamId, validateBody, (req, res) => {
    update(req, res);
});

routes.delete("/:id", validateParamId, (req, res) => {
    remove(req, res);
});

routes.post("/upload", uploaderImage.single("file"), (req, res) => {
    uploadImage(req, res);
});

module.exports = routes;