import PropTypes from "prop-types";
import "./main.scss";

const Main = (props) => {
    const { children } = props;

    return (
        <main className="main">
            {children}
        </main>
    );
};

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;