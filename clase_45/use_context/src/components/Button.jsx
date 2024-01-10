import PropTypes from "prop-types";

const Button = (props) => {
    const { title, onclick } = props;

    return (
        <button onClick={onclick}>{title}</button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
};

export default Button;
