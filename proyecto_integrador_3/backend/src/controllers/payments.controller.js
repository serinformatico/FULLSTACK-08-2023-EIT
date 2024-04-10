/*
    Importante: En la collection payments, se debe crear un índice de tipo unique
    compuesto para los campo "id" y "platform".

    Comandos para crear índices:
        db.payments.createIndex({ "id": 1, "platform": 1 }, { name: "idx_id_platform", unique: true })
*/

/* eslint-disable camelcase */
const { MercadoPagoConfig, Preference } = require("mercadopago");
const { getCollection } = require("../connectionDB.js");

const { HEADER_CONTENT_TYPE } = require("../constants/headers.js");
const { ERROR_MERCADOPAGO_PREFERENCE_ID, ERROR_SERVER } = require("../constants/messages.js");

const { normalizeText } = require("../helpers/string.helper.js");
const { convertDateTimeToString } = require("../helpers/datetime.helper.js");

const client = new MercadoPagoConfig({ accessToken: process.env.MERCADOPAGO_TOKEN });

const createMercadoPagoPreferenceBody = (values) => {
    const { title, total } = values;

    return {
        items: [
            {
                title: normalizeText(title),
                unit_price: Number(total),
                quantity: 1,
            },
        ],
        currency_id: "ARS",
        back_urls: {
            success: "https://mi-tienda-sergio.netlify.app",
            failure: "https://mi-tienda-sergio.netlify.app",
            pending: "https://mi-tienda-sergio.netlify.app",
        },
        auto_return: "approved",
        notification_url: `${process.env.BACKEND_HOST}/api/payments/mercado-pago/notify/webhooks`, // Levantar LocalTunnel
    };
};

const createMercadoPagoPaymentSchema = (values) => {
    return {
        id: Number(values.id),
        datetime: convertDateTimeToString(Date(values.money_release_date)),
        title: normalizeText(values.description),
        total: Number(values.transaction_details.total_paid_amount),
        platform: "MERCADOPAGO",
        paymentType: values.payment_type_id,
        paymentStatus: values.money_release_status,
        isAccredited: values.status_detail === "accredited",
    };
};

const registerMercadoPagoPayment = async (values) => {
    try {
        const collection = await getCollection("payments");
        const paymentDB = await collection.findOne({ id: Number(values.id), platform: "MERCADOPAGO" });
        const payment = createMercadoPagoPaymentSchema(values);

        if (paymentDB) {
            await collection.updateOne({ id: values.id, platform: "MERCADOPAGO" }, { $set: payment });
        } else {
            await collection.insertOne(payment);
        }

        return payment;
    } catch (error) {
        console.log(error);
    }
};

// Controlador para crear una preferencia (producto) de Mercado Pago
const createMercadoPagoPreference = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const preference = new Preference(client);
        const result = await preference.create({ body: createMercadoPagoPreferenceBody(req.body) });
        const id = result?.id;

        if (!id) return res.status(404).send({ success: false, message: ERROR_MERCADOPAGO_PREFERENCE_ID });

        res.status(200).send({ success: true, data: id });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

// Controlador para notificar desde Mercado Pago por Webhooks
const notifyFromMercadoPagoByWebHooks = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const params = new URLSearchParams({
            sort: "date_created",
            criteria: "desc",
            range: "date_created",
            begin_date: "NOW-30DAYS",
            end_date: "NOW",
        });

        const options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.MERCADOPAGO_TOKEN}`,
            },
        };

        const url = `https://api.mercadopago.com/v1/payments/search?${params}`;
        const response = await fetch(url, options);
        const responseJSON = await response.json();
        const payments = responseJSON["results"] ?? [];
        const paymentsDB = [];

        for (const payment of payments) {
            paymentsDB.push(await registerMercadoPagoPayment(payment));
        }

        res.status(200).send({ success: true, data: paymentsDB });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

module.exports = { createMercadoPagoPreference, notifyFromMercadoPagoByWebHooks };

/*
    Cuentas de pruebas:
        Tipo        Usuario             Contraseña  Tienda
        Vendedor    TESTUSER1199796214  eJHLZbPxfo  Mi tienda Web - Educación IT
        Comprador   TESTUSER384743006   0WxL8PE7P4
        Comprador   TESTUSER529155478   Y7QeaAZ3La

    Tarjetas de crédito de pruebas:
        Tarjeta	        Número	            Código de seguridad	    Fecha de caducidad  Nombre      DNI
        Mastercard	    5031755734530604	123	                    11/25               María López 12345678
        Visa	        4509953566233704	123	                    11/25               María López 12345678
        American        371180303257522	    1234	                11/25               María López 12345678

    Tarjetas de débito de pruebas:
        Tarjeta	        Número	            Código de seguridad	    Fecha de caducidad  Nombre      DNI
        Mastercard	    5287338310253304    123	                    11/25               María López 12345678
        Visa	        4002768694395619 	123	                    11/25               María López 12345678
*/