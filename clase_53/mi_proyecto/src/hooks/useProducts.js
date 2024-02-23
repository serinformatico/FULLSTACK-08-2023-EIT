import useLocalStorage from "./useLocalStorage.js";

import { pizzas } from "../data/data.js";

const useProducts = () => {
    const { items, setItem } = useLocalStorage({ products: pizzas });

    const normalizeValue = (value = "") => {
        return value
            .toLowerCase()
            .trim()
            .replace("á", "a")
            .replace("é", "e")
            .replace("í", "i")
            .replace("ó", "o")
            .replace("ú", "u");
    };

    const searchProducts = (text) => {
        const preparedText = normalizeValue(text);

        return items.products.filter((pizza) => {
            const preparedPizza = normalizeValue(pizza.name);

            if (preparedText.length === 0 || preparedPizza.includes(preparedText)) {
                return pizza;
            }
        });
    };

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
            id: values.id ?? generateId(),
            name: values.name ?? "",
            description: values.description ?? "",
            image: values.image ?? "/images/home/products/img0001.jpg",
            stock: Number(values.stock) ?? 0,
            price: Number(values.price) ?? 0,
            isPromotion: values.isPromotion ?? false,
        };
    };

    const createProduct = (values) => {
        setItem("products", [ ...items.products, createSchema(values) ]);
    };

    const updateProduct = (values) => {
        const index = items.products.findIndex((item) => item.id === values.id);
        const products = items.products.toSpliced(index, 1, createSchema(values));
        setItem("products", products);
    };

    const removeProduct = (id) => {
        const productsWithoutthisProduct = items.products.filter((item) => item.id != id);
        console.log(id);
        setItem("products", productsWithoutthisProduct);
    };

    return {
        products: items.products,
        searchProducts,
        createProduct,
        updateProduct,
        removeProduct,
    };
};

export default useProducts;