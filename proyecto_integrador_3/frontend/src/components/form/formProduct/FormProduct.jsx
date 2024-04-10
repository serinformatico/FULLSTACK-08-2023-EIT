import { useState } from "react";
import useProducts from "../../../hooks/useProducts.js";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import "./formProduct.scss";

import validationSchema from "./formProduct.validation.js";
import { JPG, PNG } from "../../../constants/general.js";
import { DEFAULT_IMAGE_NAME, IMAGES_URL } from "../../../constants/api.js";

import InputField from "../inputField/InputField.jsx";
import InputFile from "../inputFile/InputFile.jsx";

import Switch from "../switch/Switch.jsx";
import Button from "../../button/Button.jsx";
import Alert from "../../alert/Alert.jsx";

const FormProduct = (props) => {
    const { initialValues } = props;

    const [ openAlert, setOpenAlert ] = useState(false);
    const { createProduct, updateProduct, uploadProductImage } = useProducts();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {

            // Establece la URL de la imagen subida. Esto sucede, si hay un archivo
            // cargado en el buffer del inputFile y si se ha logrodo obtener el nombre
            // del archivo generado en el backend.
            if (values?.files) {
                const response = await uploadProductImage(values.files[0]);
                values.imageFileName = response?.data?.filename ? response.data.filename : DEFAULT_IMAGE_NAME;
            }

            values.id ? updateProduct(values) : createProduct(values);
            setOpenAlert(true);
        },
    });

    return (
        <Box
            component="form"
            className="form-product"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                label="Nombre"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                errorMessage={formik.touched.name && formik.errors.name}
                inputProps={{ maxLength: 35 }}/>

            <InputField
                label="Precio"
                name="price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.price && Boolean(formik.errors.price)}
                errorMessage={formik.touched.price && formik.errors.price}
                inputProps={{ maxLength: 12 }}/>

            <InputField
                label="Stock"
                name="stock"
                value={formik.values.stock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.stock && Boolean(formik.errors.stock)}
                errorMessage={formik.touched.stock && formik.errors.stock}
                inputProps={{ maxLength: 6 }}/>

            <InputField
                label="Descripción"
                name="description"
                multiline
                rows={5}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.description && Boolean(formik.errors.description)}
                errorMessage={formik.touched.description && formik.errors.description}
                inputProps={{ maxLength: 150 }}/>

            <InputFile
                label="Imagen"
                name="files"
                accept={[ JPG, PNG ]}
                formik={formik}
                error={formik.touched.files && Boolean(formik.errors.files)}
                errorMessage={formik.touched.files && formik.errors.files}/>

            <Box
                className="form-product__image"
                component="img"
                src={`${IMAGES_URL}/${formik.values.imageFileName}`}
                alt="Fotografía del producto"/>

            <Switch
                label="Está en promoción"
                name="isPromotion"
                value={formik.values.isPromotion}
                onChange={formik.handleChange}
            />

            <Button type="submit">Guardar</Button>
            <Button
                component={NavLink}
                to={"/"}
                color="danger">
                    Cancelar
            </Button>
            <Alert
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                message="El producto se creó correctamente"
                redirectUrl="/"/>
        </Box>
    );
};

FormProduct.propTypes = {
    initialValues: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        imageFileName: PropTypes.string.isRequired,
        isPromotion: PropTypes.bool.isRequired,
        file: PropTypes.array,
    }),
};

FormProduct.defaultProps = {
    initialValues: {
        name: "",
        price: 0,
        stock: 0,
        description: "",
        imageFileName: DEFAULT_IMAGE_NAME,
        isPromotion: false,
        files: [],
    },
};

export default FormProduct;