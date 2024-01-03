import PropTypes from "prop-types";
import "./header.scss";

const Header = (props) => {
    const {title, subtitle} = props;

    return (
        <header className="header">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default Header;
