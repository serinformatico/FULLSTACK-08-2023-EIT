import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { pizzas } from "./data.js";
import "./home.scss";

import ProductCard from "../components/productCard/ProductCard";

const Home = () => {
    const [ products, setProducts ] = useState([]);

    const IT_IS_OFF = 10.0;

    useEffect(() => {
        setProducts(pizzas);
    }, []);

    return (
        <Box className="home">
            <Box
                component="section"
                className="home__section">

                <Box className="home__section__search">
                    <h3>Productos</h3>

                </Box>

                <Box className="home__section__cards">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            itIsOff={IT_IS_OFF}/>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Home;