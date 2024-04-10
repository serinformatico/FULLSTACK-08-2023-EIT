import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import "./product.scss";

import FormProduct from "../../components/form/formProduct/FormProduct";

const Product = () => {
    const location = useLocation();
    const productoRef = useRef(location?.state?.product);

    // useLocation es un hook proporcionado por React Router DOM que te permite acceder
    // a la ubicación actual de la aplicación. La ubicación incluye información sobre
    // la URL actual, como la ruta y los parámetros de consulta. Este hook sirve para
    // recuperar parámetros, acceder al state de la API History, etc.

    return (
        <Box className="product">
            <Box
                component="section"
                className="product__section">
                <h3>Producto</h3>

                <FormProduct initialValues={productoRef.current}/>
            </Box>
        </Box>
    );
};

export default Product;