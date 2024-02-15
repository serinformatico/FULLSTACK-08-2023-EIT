import PropTypes from "prop-types";
import { Button as ButtonUI } from "@mui/material";
import "./button.scss";

const Button = (props) => {
    const { children, type, onClick, color } = props;

    return (
        <ButtonUI
            className={`button ${color && `button--${color}`}`}
            type={type}
            onClick={onClick}
            variant="contained"
            size="small">
            {children}
        </ButtonUI>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
};

Button.defaultProps = {
    type: "button",
};

export default Button;