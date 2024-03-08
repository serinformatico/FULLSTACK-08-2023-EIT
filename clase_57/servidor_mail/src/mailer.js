const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

// Configuración de SMTP: https://app.brevo.com/ + Google
const getTransport = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // Determina si se usa SSL/TLS
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
};

const setOptions = (to, subject, content) => {
    return {
        from: process.env.SMTP_EMAIL,
        to,
        subject,
        text: content };
};

const sendMail = async (to, subject, content) => {
    try {
        const transport = getTransport();
        const options = setOptions(to, subject, content);

        await transport.sendMail(options);

        return "Envío Correcto";
    } catch (error) {
        console.error(error);
        return "Envío Fallido";
    }
};

module.exports = sendMail;