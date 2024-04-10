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
        title: Joi.string().min(3).max(35).required(),
        total: Joi.number().min(1).required(),
    });
    validate(schema, req.body, res, next);
};

module.exports = {
    validateBody,
};