const Joi = require("joi");

const validate = (schema, params, res, next) => {
    const { error } = schema.validate(params, { allowUnknown: true });

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    next();
};

const validateBody = (req, res, next) => {
    const schema = Joi.object({
        fullname: Joi.string().min(3).max(25).required(),
        telephone: Joi.string().max(15).required(),
        email: Joi.string().email().max(50).required(),
        consult: Joi.string().min(15).max(150).required(),
    });

    validate(schema, req.body, res, next);
};

module.exports = {
    validateBody,
};