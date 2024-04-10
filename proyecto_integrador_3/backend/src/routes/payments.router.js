const Router = require("express");
const { validateBody } = require("../validations/payments.validation.js");
const { createMercadoPagoPreference, notifyFromMercadoPagoByWebHooks } = require("../controllers/payments.controller.js");

const routes = Router();

routes
    .post("/mercado-pago/create-preference", validateBody, (req, res) => {
        createMercadoPagoPreference(req, res);
    })
    .post("/mercado-pago/notify/webhooks", (req, res) => {
        notifyFromMercadoPagoByWebHooks(req, res);
    });

module.exports = routes;