import * as yup from "yup";

import {
    MESSAGE_REQUIRED,
    MESSAGE_PRICE_INVALID,
    MESSAGE_STOCK_INVALID,
    MESSAGE_IMAGE_PATH_INVALID,
    REGEX_PRICE,
    REGEX_STOCK,
    REGEX_IMAGE_PATH,
} from "../../../constants/regexPattern";

const validationSchema = yup.object({
    name: yup
        .string("Ingresa el nombre")
        .min(3, "Ingresa un nombre que tenga mas de 3 carateres")
        .required(MESSAGE_REQUIRED),
    price: yup
        .string("Ingresa el precio")
        .matches(REGEX_PRICE, MESSAGE_PRICE_INVALID)
        .required(MESSAGE_REQUIRED),
    stock: yup
        .string("Ingresa el stock")
        .matches(REGEX_STOCK, MESSAGE_STOCK_INVALID)
        .required(MESSAGE_REQUIRED),
    description: yup
        .string("Ingresa tu consulta")
        .min(15, "Ingresa una consulta que tenga entre 15 y 150 carateres"),
    image: yup
        .string("Ingresa el stock")
        .matches(REGEX_IMAGE_PATH, MESSAGE_IMAGE_PATH_INVALID)
        .required(MESSAGE_REQUIRED),
});

export default validationSchema;