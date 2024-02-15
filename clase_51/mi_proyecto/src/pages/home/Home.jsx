import { useState } from "react";
import { Box } from "@mui/material";
import "./home.scss";

import ProductCard from "../../components/productCard/ProductCard";

const IT_IS_OFF = 10.0;

const Home = () => {
    const [ products, setProducts ] = useState([]);

    return (
        <Box className="home">
            <Box
                component="section"
                className="home__section">

                <Box className="home__section__search">
                    <h3>Productos</h3>
                </Box>

                <Box
                    className="home__section__cards">
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