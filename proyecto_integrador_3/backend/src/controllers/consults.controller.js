const ejs = require("ejs");
const { HEADER_CONTENT_TYPE } = require("../constants/headers.js");
const { CONSULTS_TEMPLATE_PATH } = require("../constants/paths.js");
const { ERROR_ID_NOT_FOUND, ERROR_SERVER } = require("../constants/messages.js");
const sendMail = require("../mailer.js");

// Controlador para crear un producto
const send = async (req, res) => {
    res.set(HEADER_CONTENT_TYPE);

    try {
        const { fullname, telephone, email, consult } = req.body;
        const datetime = new Date().toLocaleString();

        const from = `"${fullname}" <${email}>`;
        const to = "sergio.tfg.siglo21@gmail.com";
        const subject = "Consulta Web";
        const contentHTML = await ejs.renderFile(CONSULTS_TEMPLATE_PATH, { datetime, fullname, telephone, consult });

        const result = await sendMail(from, to, subject, contentHTML);

        if (!result) return res.status(404).send({ success: false, message: ERROR_ID_NOT_FOUND });

        res.status(200).send({ success: true, data: result });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: ERROR_SERVER });
    }
};

module.exports = { send };