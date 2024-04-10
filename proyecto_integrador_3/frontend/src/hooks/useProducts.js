import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ShoppingCartContext from "../contexts/ShoppingCartContext.jsx";

import { PRODUCTS_URL } from "../constants/api.js";

const useProducts = () => {
    const [ response, setResponse ] = useState({});
    const [ products, setProducts ] = useState([]);
    const { removeCartProduct } = useContext(ShoppingCartContext);

    const searchProducts = async (params) => {
        const queryParams = new URLSearchParams(params);
        const url = queryParams.size > 0 ? `${PRODUCTS_URL}?${queryParams.toString()}` : PRODUCTS_URL;

        return await axios.get(url).then((res) => {
            setResponse(res.data);
            setProducts(res.data?.data ?? []);
            return res.data;
        });
    };

    useEffect(() => {
        searchProducts({});
    }, []);

    const createProduct = async (values) => {
        return await axios.post(PRODUCTS_URL, values).then((res) => {
            return res.data;
        });
    };

    const updateProduct = async (values) => {
        return await axios.put(`${PRODUCTS_URL}/${values.id}`, values).then((res) => {
            return res.data;
        });
    };

    const decreaseProductStock = async (products) => {
        return await axios.patch(`${PRODUCTS_URL}/decrease-stock`, { products }).then((res) => {
            return res.data;
        });
    };

    const removeProduct = async (id) => {
        return await axios.delete(`${PRODUCTS_URL}/${id}`).then((res) => {
            removeCartProduct(id);
            searchProducts({});
            return res.data;
        });
    };

    const uploadProductImage = async (file) => {
        const options = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        return await axios.post(`${PRODUCTS_URL}/upload`, { file }, options).then((res) => {
            return res.data;
        });
    };

    return {
        response,
        products,
        searchProducts,
        createProduct,
        updateProduct,
        decreaseProductStock,
        removeProduct,
        uploadProductImage,
    };
};

export default useProducts;