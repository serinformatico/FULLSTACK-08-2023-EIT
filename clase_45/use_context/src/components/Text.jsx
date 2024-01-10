import PropTypes from "prop-types";

const Text = (props) => {
    const { children } = props;

    return (
        <p>
            {children}
        </p>
    );
};

Text.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Text;
