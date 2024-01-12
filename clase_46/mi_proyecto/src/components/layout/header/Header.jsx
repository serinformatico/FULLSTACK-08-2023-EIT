import Navbar from "../navbar/Navbar";
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <h1>Mi Tienda</h1>

            <Navbar />
        </header>
    );
};

export default Header;