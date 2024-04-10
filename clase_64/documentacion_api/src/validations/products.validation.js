const Joi = require("joi");

const validate = (schema, params, res, next) => {
    const { error } = schema.validate(params, { allowUnknown: true });

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
        name: Joi.string().min(3).max(35).required(),
        description: Joi.string().min(15).max(150).allow("").allow(null),
        imageFileName: Joi.string().min(15).max(150).required(),
        stock: Joi.number().integer().min(0).required(),
        price: Joi.number().min(1).required(),
        isPromotion: Joi.boolean().required(),
        amount: Joi.number().integer().min(0).allow(null),
    });

    validate(schema, req.body, res, next);
};

module.exports = {
    validateParamId,
    validateBody,
};