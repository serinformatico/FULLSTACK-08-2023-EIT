import { useContext } from "react";
import useProducts from "../../hooks/useProducts";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Card, CardActions, CardContent, CardMedia, IconButton } from "@mui/material";
import "./productCard.scss";

import ShoppingCartContext from "../../contexts/ShoppingCartContext";

import Button from "../button/Button";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect } from "react";

const ProductCard = (props) => {
    const { product, setProducts, itIsOff } = props;
    const { getCartProduct, addCartProduct, subtractCartProduct } = useContext(ShoppingCartContext);
    const { products, removeProduct } = useProducts();

    useEffect(() => {
        if (products?.length > 0) {
            setProducts(products);
        }
    }, [products]);

    return (
        <Card className="product-card">
            <Box className="product-card__floats">
                <Box>
                    <IconButton
                        component={NavLink}
                        to={`/product/${product.id}`}
                        state={{ product }}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton onClick={() => removeProduct(product.id)}><DeleteIcon/></IconButton>
                </Box>
            </Box>
            <CardMedia
                component="img"
                className="product-card__image"
                image={product.image}
                alt={`Fotografía de ${product.name}`}/>
            <CardContent className="product-card__content">
                <h4>{product.name}</h4>
                <p><span>Ingredientes:</span> {`${product.description}`}</p>
                {!product.isPromotion && <p><span>Precio:</span> {`${product.price}`}</p>}
                {product.isPromotion && <p><span>Precio promocional:</span> {`${product.price - (product.price / 100 * itIsOff )}`}</p>}
            </CardContent>
            <CardActions className="product-card__actions">
                {product.stock > 0
                    ? (<>
                        <Button
                            color="danger"
                            onClick={() => subtractCartProduct(product)}>
                            <RemoveIcon/>
                        </Button>
                        <span>{getCartProduct(product.id)?.amount ?? 0}</span>
                        <Button onClick={() => addCartProduct(product)}><AddIcon/></Button>
                    </>)
                    : (<span>SIN STOCK</span>)
                }
            </CardActions>
        </Card>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isPromotion: PropTypes.bool.isRequired,
    }).isRequired,
    setProducts: PropTypes.func.isRequired,
    itIsOff: PropTypes.number,
};

export default ProductCard;