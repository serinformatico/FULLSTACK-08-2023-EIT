const nodemailer = require("nodemailer");
const { ENV_PATH } = require("./constants/paths");

// Configuración de la ruta de las variables de entorno
require("dotenv").config({ path: ENV_PATH });

// Configuración de SMTP: https://app.brevo.com/ + Google
const getTransport = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // SSL/TLS
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_PASSWORD,
        },
    });
};

const sendMail = async (from, to, subject, contentHTML) => {
    try {
        const transport = getTransport();

        return await transport.sendMail({ from, to, subject, html: contentHTML });
    } catch (error) {
        console.error(error);
    }
};

module.exports = sendMail;