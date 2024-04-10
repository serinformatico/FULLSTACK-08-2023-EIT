import * as yup from "yup";

const createSchema = (searchType) => {
    return (searchType === "string") ? { search: yup.string().min(3, "Ingresa 3 o más caracteres") } : {};
};

const validationSchema = (searchType) => yup.object().shape(createSchema(searchType));

export default validationSchema;