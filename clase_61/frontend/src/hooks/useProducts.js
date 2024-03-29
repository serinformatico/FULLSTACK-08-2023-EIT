import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ShoppingCartContext from "../contexts/ShoppingCartContext.jsx";
import { PRODUCTS_URL } from "../constants/api.js";

const useProducts = () => {
    const { removeCartProduct } = useContext(ShoppingCartContext);
    const [ response, setResponse ] = useState({});
    const [ products, setProducts ] = useState([]);

    const searchProducts = async (params) => {
        const queryParams = new URLSearchParams(params);
        const url = queryParams.size > 0 ? `${PRODUCTS_URL}?${queryParams.toString()}` : PRODUCTS_URL;

        return await axios.get(url)
            .then((res) => {
                setResponse(res);
                setProducts(res.data?.data);
                return res.data;
            });
    };

    useEffect(() => {
        searchProducts({});
    }, []);

    const createProduct = async (values) => {
        return await axios.post(PRODUCTS_URL, values)
            .then((res) => {
                setResponse(res);
                return res.data;
            });
    };

    const updateProduct = async (values) => {
        return await axios.put(`${PRODUCTS_URL}/${values.id}`, values)
            .then((res) => {
                setResponse(res);
                return res.data;
            });
    };

    const updateProductStock = (products) => {
        // const productsWithStockToUpdate = items.products;

        // products.forEach((product) => {
        //     product.stock = Number(product.stock) - Number(product.amount);
        //     const index = productsWithStockToUpdate.findIndex((item) => item.id === product.id);
        //     productsWithStockToUpdate.splice(index, 1, createSchema(product));
        // });

        // setItem("products", productsWithStockToUpdate);
    };

    const removeProduct = async (id) => {
        return await axios.delete(`${PRODUCTS_URL}/${id}`)
            .then((res) => {
                setResponse(res);
                removeCartProduct(id);
                return res.data;
            });
    };

    return {
        products,
        response,
        searchProducts,
        createProduct,
        updateProduct,
        updateProductStock,
        removeProduct,
    };
};

export default useProducts;