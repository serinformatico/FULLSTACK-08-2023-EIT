import { useState } from "react";
import axios from "axios";

import { SHOPPING_CARTS_URL } from "../constants/api.js";

const useShoppingCarts = () => {
    const [ response, setResponse ] = useState({});
    const [ shoppingCarts, setShoppingCarts ] = useState([]);

    const searchShoppingCarts = async () => {
        return await axios.get(SHOPPING_CARTS_URL).then((res) => {
            setResponse(res.data);
            setShoppingCarts(res.data?.data ?? []);
            return res.data;
        });
    };

    const createShoppingCart = async (values) => {
        return await axios.post(SHOPPING_CARTS_URL, values).then((res) => {
            return res.data;
        });
    };

    return {
        response,
        shoppingCarts,
        searchShoppingCarts,
        createShoppingCart,
    };
};

export default useShoppingCarts;