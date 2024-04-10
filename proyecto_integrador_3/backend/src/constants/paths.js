const path = require("path");

const ENV_PATH = path.join(__dirname, "../../.env");
const DIR_PUBLIC_PATH = path.join(__dirname, "../public");
const DIR_IMAGES_PATH = path.join(DIR_PUBLIC_PATH, "images");
const DIR_VIEWS_PATH = path.join(__dirname, "../views");
const CONSULTS_TEMPLATE_PATH = path.join(DIR_VIEWS_PATH, "emailConsultTemplate.ejs");

module.exports = {
    ENV_PATH,
    DIR_PUBLIC_PATH,
    DIR_IMAGES_PATH,
    DIR_VIEWS_PATH,
    CONSULTS_TEMPLATE_PATH,
};