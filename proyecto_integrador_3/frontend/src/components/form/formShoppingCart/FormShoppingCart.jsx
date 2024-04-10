import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { Box } from "@mui/material";
import Axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import "./formShoppingCart.scss";

import ShoppingCartContext from "../../../contexts/ShoppingCartContext.jsx";
import useProducts from "../../../hooks/useProducts.js";

import validationSchema from "./formShoppingCart.validation.js";
import { MERCADOPAGO_CREATE_PREFERENCE_URL } from "../../../constants/api.js";

import InputField from "../inputField/InputField.jsx";
import Button from "../../button/Button.jsx";
import Alert from "../../alert/Alert.jsx";

initMercadoPago("APP_USR-05fea4ee-2d9f-4f87-8155-a3a6f3f79f49");

const FormShoppingCart = () => {
    const [ openAlert, setOpenAlert ] = useState(false);
    const { shoppingCart, buyCartProducts, calculateTotal, removeAllCartProducts } = useContext(ShoppingCartContext);
    const { decreaseProductStock } = useProducts();
    const [ preferenceId, setPreferenceId ] = useState(null);

    const getMercadoPagoPreferenceID = async () => {
        const body = {
            title: "Mi Compara Web",
            total: calculateTotal(),
        };

        const response = await Axios.post(MERCADOPAGO_CREATE_PREFERENCE_URL, body);
        setPreferenceId(response.data.data ?? null);
    };

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            total: 0,
        },
        validationSchema: validationSchema,
        onSubmit: async (values, { resetForm }) => {
            if (shoppingCart?.length === 0) {
                setPreferenceId(null);
                setOpenAlert(true);
            } else {
                await buyCartProducts({ ...values, total: calculateTotal() });
                await decreaseProductStock(shoppingCart);
                resetForm();
                setOpenAlert(true);

                getMercadoPagoPreferenceID();
            }
        },
    });

    return (
        <Box
            component="form"
            className="form-shopping-cart"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}>

            <InputField
                label="Nombre y apellido"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                errorMessage={formik.touched.fullname && formik.errors.fullname}
                inputProps={{ maxLength: 25 }}/>

            <InputField
                label="E-mail"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                errorMessage={formik.touched.email && formik.errors.email}
                inputProps={{ maxLength: 50 }}/>

            <Button type="submit">Comprar</Button>

            <Button
                component={NavLink}
                to={"/"}
                color="danger"
                onClick={() => removeAllCartProducts()}>
                    Cancelar
            </Button>

            {preferenceId && (
                <Wallet
                    initialization={{
                        preferenceId: preferenceId,
                        redirectMode: "blank" }}
                    customization={{
                        texts: {
                            action: "pay",
                            valueProp: "security_details",
                        },
                    }}/>
            )}

            <Alert
                openAlert={openAlert}
                setOpenAlert={setOpenAlert}
                severity={shoppingCart?.length > 0 ? "success" : "error"}
                message= {shoppingCart?.length > 0 ? "Tu compra se procesó correctamente" : "No hay productos en el carrito de compras"}/>
        </Box>
    );
};

export default FormShoppingCart;