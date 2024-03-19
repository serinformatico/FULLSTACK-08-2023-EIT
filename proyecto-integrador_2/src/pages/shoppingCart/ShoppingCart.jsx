import { useContext, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { NavLink } from "react-router-dom";
import { Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "./shoppingCart.scss";

import ShoppingCartContext from "../../contexts/ShoppingCartContext";

import Button from "../../components/button/Button";
import Alert from "../../components/alert/Alert";

import DeleteIcon from "@mui/icons-material/Delete";

const ShoppingCart = () => {
    const { shoppingCart, calculateTotal, removeCartProduct, removeAllCartProducts, buyCartProducts } = useContext(ShoppingCartContext);
    const [ openAlert, setOpenAlert ] = useState(false);
    const { updateProductStock } = useProducts();

    const buy = () => {
        updateProductStock(shoppingCart);
        buyCartProducts();
        setOpenAlert(true);
    };

    return (
        <Box className="shopping-cart">
            <Box
                component="section"
                className="shopping-cart__section">
                <h3>Carrito De Compras</h3>

                <Table
                    className="shopping-cart__section__table"
                    size="small">
                    <TableHead className="shopping-cart__section__table__header">
                        <TableRow>
                            <TableCell>Producto</TableCell>
                            <TableCell>Cant.</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Importe</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="shopping-cart__section__table__body">
                        {shoppingCart?.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.amount}</TableCell>
                                <TableCell>{`$${Number(item.price).toFixed(2)}`}</TableCell>
                                <TableCell>{`$${Number(item.totalPrice).toFixed(2)}`}</TableCell>
                                <TableCell><IconButton onClick={() => removeCartProduct(item.id)}><DeleteIcon/></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableBody className="shopping-cart__section__table__total">
                        <TableRow>
                            <TableCell colSpan={5}>{`TOTAL $${calculateTotal().toFixed(2)}`}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Box className="shopping-cart__section__button-group">
                    <Button
                        type="button"
                        onClick={() => buy()}>
                        Comprar
                    </Button>
                    <Button
                        component={NavLink}
                        to={"/"}
                        color="danger"
                        onClick={() => removeAllCartProducts()}>
                            Cancelar
                    </Button>
                    <Alert
                        openAlert={openAlert}
                        setOpenAlert={setOpenAlert}
                        message="La compra se procesó correctamente"
                        navigateUrl="/"/>
                </Box>
            </Box>
        </Box>
    );
};

export default ShoppingCart;