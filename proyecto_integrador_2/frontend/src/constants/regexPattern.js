const MESSAGE_REQUIRED = "Este dato es obligatorio";
const MESSAGE_TELEPHONE_INVALID = "Ingresa un teléfono válido. Ej: 02644241020";
const MESSAGE_EMAIL_INVALID = "Ingresa un email válido. Ej. ser@gmail.com";
const MESSAGE_PRICE_INVALID = "Ingresa un precio válido";
const MESSAGE_STOCK_INVALID = "Ingresa un stock válido";
const MESSAGE_IMAGE_PATH_INVALID = "Ingresa una ruta de imagen válida. Ej: /images/img01.jpg";

const REGEX_TELEPHONE = /[0-1]+/;
const REGEX_EMAIL = /^[a-z0-9.]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;
const REGEX_PRICE = /^(([1-9]{1}[0-9]*)(,[0-9]{1,2}){0,1})$/;
const REGEX_STOCK = /^([0-9]{1,6})$/;
const REGEX_IMAGE_PATH = /^(\/images\/)(\w|\/)+(\.jpg|\.png)$/;

export {
    MESSAGE_REQUIRED,
    MESSAGE_TELEPHONE_INVALID,
    MESSAGE_EMAIL_INVALID,
    MESSAGE_PRICE_INVALID,
    MESSAGE_STOCK_INVALID,
    MESSAGE_IMAGE_PATH_INVALID,
    REGEX_TELEPHONE,
    REGEX_EMAIL,
    REGEX_PRICE,
    REGEX_STOCK,
    REGEX_IMAGE_PATH,
};