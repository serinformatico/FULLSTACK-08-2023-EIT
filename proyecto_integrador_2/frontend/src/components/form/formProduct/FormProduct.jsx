import { useState } from "react";
import useProducts from "../../../hooks/useProducts.js";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import "./formProduct.scss";

import validationSchema from "./formProduct.validation.js";

import InputField from "../inputField/InputField.jsx";
import Switch from "../switch/Switch.jsx";
import Button from "../../button/Button.jsx";
import Alert from "../../alert/Alert.jsx";

const FormProduct = (props) => {
    const { initialValues } = props;

    const [ openAlert, setOpenAlert ] = useState(false);
    const { createProduct, updateProduct } = useProducts();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
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
                inputProps={{ maxLength: 25 }}/>

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

            <InputField
                label="Ruta de la imagen"
                name="image"
                value={formik.values.image}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.image && Boolean(formik.errors.image)}
                errorMessage={formik.touched.image && formik.errors.image}
                inputProps={{ maxLength: 50 }}/>

            <Box
                className="form-product__image"
                component="img"
                src={formik.values.image}
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
        image: PropTypes.string.isRequired,
        isPromotion: PropTypes.bool.isRequired,
    }).isRequired,
};

FormProduct.defaultProps = {
    initialValues: {
        name: "",
        price: 0,
        stock: 0,
        description: "",
        image: "/images/home/products/default.jpg",
        isPromotion: false,
    },
};

export default FormProduct;