import { Box } from "@mui/material";
import "./home.scss";

import ProductGallery from "../../components/productGallery/ProductGallery.jsx";

const Home = () => {
    return (
        <Box className="home">
            <Box
                component="section"
                className="home__section">

                <ProductGallery/>
            </Box>
        </Box>
    );
};

export default Home;