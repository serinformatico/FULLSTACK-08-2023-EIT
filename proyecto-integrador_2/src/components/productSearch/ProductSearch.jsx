import { useEffect } from "react";
import useProducts from "../../hooks/useProducts.js";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./productSearch.scss";

import InputField from "../form/inputField/InputField.jsx";
import Button from "../button/Button.jsx";

import SearchIcon from "@mui/icons-material/Search";

const ProductSearch = (props) => {
    const { setProducts } = props;
    const { products, searchProducts } = useProducts();

    useEffect(() => {
        if (products?.length > 0) {
            setProducts(products);
        }
    }, [products]);

    const validationSchema = yup.object({
        text: yup
            .string("Ingresa un texto")
            .min(3, "Ingresa 3 o más carateres"),
    });

    const formik = useFormik({
        initialValues: {
            text: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const productsFound = searchProducts(values.text);
            setProducts(productsFound);
        },
    });

    const handleOnChange = (event) => {
        formik.handleChange(event);

        if (event.target.value.trim().length === 0) {
            const productsFound = searchProducts(event.target.value);
            setProducts(productsFound);
        }
    };

    return (
        <Box
            component="form"
            className="product-search"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                name="text"
                value={formik.values.text}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
                error={formik.touched.text && Boolean(formik.errors.text)}
                errorMessage={formik.touched.text && formik.errors.text}
                inputProps={{ maxLength: 10 }}>
            </InputField>

            <Button type="submit"><SearchIcon/></Button>
        </Box>
    );
};

ProductSearch.propTypes = {
    setProducts: PropTypes.func.isRequired,
};

export default ProductSearch;