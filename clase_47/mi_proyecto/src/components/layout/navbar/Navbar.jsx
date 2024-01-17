import { NavLink } from "react-router-dom";
import {
    Badge,
    Box,
    Button,
    IconButton,
} from "@mui/material";
import "./navbar.scss";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
    const links = [
        { id: 1, text: "Inicio", url: "/", icon: "" },
        { id: 2, text: "Nosotros", url: "/about", icon: "" },
        { id: 3, text: "Contacto", url: "/contact", icon: "" },
    ];

    return (
        <Box
            component="nav"
            className="navbar">

            <Box className="navbar__drawer-icon">
                <MenuIcon/>
            </Box>

            <Box className="navbar__items">
                {links.map((link) => (
                    <Button
                        key={link.id}
                        component={NavLink}
                        to={link.url}>
                        {link.text}
                    </Button>
                ))}
            </Box>

            <Box className="navbar__shopping-cart">
                <IconButton>
                    <Badge
                        className="navbar__shopping-cart__icon-badge"
                        badgeContent={10}>
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </IconButton>
            </Box>
        </Box>
    );
};

export default Navbar;