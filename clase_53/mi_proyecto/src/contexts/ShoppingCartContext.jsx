import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import PropTypes from "prop-types";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = (props) => {
    const { children } = props;
    const { items, setItem } = useLocalStorage({ shoppingCart: [] });

    const getProductCart = (id) => {
        return items.shoppingCart.find((item) => item.id === id);
    };

    const addProductCart = (product) => {
        const productQueEstaEnLS = getProductCart(product.id);
        if (productQueEstaEnLS) {
            // cuando existe en LS
            product.amount = productQueEstaEnLS.amount+1;
            console.log({ productQueEstaEnLS });
            const index = items.shoppingCart.findIndex((item) => item.id === product.id);
            const products = items.shoppingCart.toSpliced(index, 1, product);
            setItem("shoppingCart", products);

        } else {
            // cuando no existe en LS
            product.amount = 1;
            setItem("shoppingCart", [ ...items.shoppingCart, product ]);
        }
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                shoppingCart: items.shoppingCart,
                getProductCart,
                addProductCart,
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {
    ShoppingCartContext,
    ShoppingCartProvider,
};