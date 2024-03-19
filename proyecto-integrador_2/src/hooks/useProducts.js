import { useContext } from "react";
import useLocalStorage from "./useLocalStorage";
import ShoppingCartContext from "../contexts/ShoppingCartContext.jsx";

import { pizzas } from "../data/data.js";

const useProducts = () => {
    const { items, setItem } = useLocalStorage({ products: pizzas });
    const { removeCartProduct } = useContext(ShoppingCartContext);

    const generateId = () => {
        let maxId = 0;

        items.products.forEach((item) => {
            if (item.id > maxId) {
                maxId = item.id;
            }
        });

        return maxId + 1;
    };

    const createSchema = (values) => {
        return {
            id: values.id || generateId(),
            name: values.name ?? "",
            price: Number(values.price) ?? 0,
            stock: Number(values.stock) ?? 0,
            description: values.description ?? "",
            image: values.image ?? "/images/home/products/default.jpg",
            isPromotion: Boolean(values.isPromotion) ?? false,
        };
    };

    const normalizeValue = (value) => {
        return value
            .toLowerCase()
            .trim()
            .replace("á", "a")
            .replace("é", "e")
            .replace("í", "i")
            .replace("ó", "o")
            .replace("ú", "u");
    };

    const searchProducts = (text = "") => {
        const preparedText = normalizeValue(text);

        return items.products.filter((pizza) => {
            const preparedPizza = normalizeValue(pizza.name);

            if (preparedText.length === 0) {
                return pizza;
            }

            if (preparedText.length >= 3 && preparedPizza.includes(preparedText)) {
                return pizza;
            }
        }) ?? [];
    };

    const createProduct = (values) => {
        setItem("products", [ ...items.products, createSchema(values) ]);
    };

    const updateProduct = (values) => {
        if (values.id) {
            const index = items.products.findIndex((item) => item.id === values.id);
            const updatedProducts = items.products.toSpliced(index, 1, createSchema(values));
            setItem("products", updatedProducts);
        }
    };

    const updateProductStock = (products) => {
        const productsWithStockToUpdate = items.products;

        products.forEach((product) => {
            product.stock = Number(product.stock) - Number(product.amount);
            const index = productsWithStockToUpdate.findIndex((item) => item.id === product.id);
            productsWithStockToUpdate.splice(index, 1, createSchema(product));
        });

        setItem("products", productsWithStockToUpdate);
    };

    const removeProduct = (id) => {
        const productsWithoutThisProduct = items.products.filter((item) => item.id != id);
        setItem("products", productsWithoutThisProduct);
        removeCartProduct(id);
    };

    return {
        products: items.products,
        searchProducts,
        createProduct,
        updateProduct,
        updateProductStock,
        removeProduct,
    };
};

export default useProducts;