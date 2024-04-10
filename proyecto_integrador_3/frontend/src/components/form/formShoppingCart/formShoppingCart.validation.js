import * as yup from "yup";

import {
    MESSAGE_REQUIRED,
    MESSAGE_EMAIL_INVALID,
    REGEX_EMAIL,
} from "../../../constants/regexPattern";

const validationSchema = yup.object({
    fullname: yup
        .string("Ingresa tu nombre y apellido")
        .min(3, "Ingresa un nombre y apellido que tenga entre 3 y 25 carateres")
        .required(MESSAGE_REQUIRED),
    email: yup
        .string("Ingresa tu email")
        .matches(REGEX_EMAIL, MESSAGE_EMAIL_INVALID)
        .required(MESSAGE_REQUIRED),
});

export default validationSchema;