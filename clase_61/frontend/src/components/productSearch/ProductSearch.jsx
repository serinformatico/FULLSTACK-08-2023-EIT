import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "./productSearch.scss";

import InputField from "../form/inputField/InputField.jsx";
import Button from "../button/Button.jsx";

import SearchIcon from "@mui/icons-material/Search";
import validationSchema from "./productSearch.validation.js";

const ProductSearch = (props) => {
    const { searchProducts } = props;
    const [ searchType, setSearchType ] = useState("string");

    const formik = useFormik({
        initialValues: {
            search: "",
        },
        validationSchema: validationSchema(searchType),
        onSubmit: (values) => {
            //const productsFound = searchProducts(values.search);
            //setProducts(productsFound);
        },
    });

    const handleOnChange = (event) => {
        formik.handleChange(event);

        if (event.target.value.trim().length === 0) {
            //const productsFound = searchProducts(event.target.value);
            //setProducts(productsFound);
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
                name="search"
                value={formik.values.search}
                onChange={(event) => handleOnChange(event)}
                onBlur={formik.handleBlur}
                error={formik.touched.search && Boolean(formik.errors.search)}
                errorMessage={formik.touched.search && formik.errors.search}
                inputProps={{ maxLength: 10 }}>
            </InputField>

            <Button type="submit"><SearchIcon/></Button>
        </Box>
    );
};

ProductSearch.propTypes = {
    searchProducts: PropTypes.func.isRequired,
};

export default ProductSearch;