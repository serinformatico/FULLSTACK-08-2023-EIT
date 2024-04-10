import PropTypes from "prop-types";
import { Button as ButtonUI } from "@mui/material";
import "./button.scss";

const Button = (props) => {
    const { component, to, type, onClick, color, children } = props;

    return (
        <ButtonUI
            className={`button ${color && `button--${color}`}`}
            component={component}
            to={to}
            type={type}
            onClick={onClick}
            variant="contained"
            size="small">
            {children}
        </ButtonUI>
    );
};

Button.propTypes = {
    component: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
    to: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;