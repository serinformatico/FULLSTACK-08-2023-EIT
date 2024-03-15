const Joi = require("joi");

const validate = (schema, params, res, next) => {
    const { error } = schema.validate(params);

    if (error) {
        console.log({ error: error.details[0].message });
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

const validateParamId = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.number().integer().positive().required().messages({
            "number.base": "El ID debe ser un número",
            "number.integer": "El ID debe ser un número entero",
            "number.positive": "El ID debe ser un número positivo",
            "any.required": "El ID es requerido",
        }),
    });

    validate(schema, req.params, res, next);
};

const validateBody = (req, res, next) => {
    const schema = Joi.object({
        marca: Joi.string().min(3).max(30).required().messages({
            "string.base": "La marca debe ser un texto.",
            "string.empty": "La marca no debe estar vacía.",
            "string.min": "La marca debe tener al menos {#limit} caracteres.",
            "string.max": "La marca no debe tener más de {#limit} caracteres.",
            "any.required": "La marca es requerida.",
        }),
        modelo: Joi.string().min(3).max(30).required().messages({
            "string.base": "El modelo debe ser un texto.",
            "string.empty": "El modelo no debe estar vacío.",
            "string.min": "El modelo debe tener al menos {#limit} caracteres.",
            "string.max": "El modelo no debe tener más de {#limit} caracteres.",
            "any.required": "El modelo es requerido.",
        }),
        anio: Joi.number().integer().positive().min(1900).max(2100).required().messages({
            "number.base": "El año debe ser un número",
            "number.integer": "El año debe ser un número entero",
            "number.positive": "El año debe ser un número positivo",
            "number.min": "El año debe ser mayor o igual a 1900",
            "number.max": "El año debe ser menor o igual a 2100",
            "any.required": "El año es obligatorio",
        }),
        image: Joi.string().max(50).allow(null).messages({
            "string.base": "La ruta de la imagen debe ser un texto.",
            "string.max": "La ruta de la imagen no debe tener más de {#limit} caracteres.",
        }),
    });

    validate(schema, req.body, res, next);
};

module.exports = {
    validateParamId,
    validateBody,
};