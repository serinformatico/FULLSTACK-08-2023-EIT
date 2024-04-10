import { useContext } from "react";
import { Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import "./shoppingCart.scss";
import ShoppingCartContext from "../../contexts/ShoppingCartContext";

import DeleteIcon from "@mui/icons-material/Delete";
import FormShoppingCart from "../../components/form/formShoppingCart/FormShoppingCart";

const ShoppingCart = () => {
    const { shoppingCart, calculateTotal, removeCartProduct } = useContext(ShoppingCartContext);

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
                            <TableRow key={`item-${index}`}>
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

                <Box className="shopping-cart__section__form">
                    <FormShoppingCart/>
                </Box>

                <div id="wallet_container"></div>

            </Box>
        </Box>
    );
};

export default ShoppingCart;