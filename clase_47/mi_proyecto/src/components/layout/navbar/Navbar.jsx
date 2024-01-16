import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/about">Nosotros</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;