import PropTypes from "prop-types";
import { Button as ButtonUI } from "@mui/material";
import "./button.scss";

const Button = (props) => {
    const { type, className, children } = props;

    return (
        <ButtonUI
            className={className}
            type={type}
            variant="contained"
            size="small">
            {children}
        </ButtonUI>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Button.defaultProps = {
    type: "button",
    className: "button",
};

export default Button;