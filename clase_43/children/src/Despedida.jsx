import Proptypes from "prop-types";

const Despedida = (props) => {
    const { titulo, children } = props;

    return (
        <section>
            <h3>{titulo}</h3>
            {children}
        </section>
    );
};

Despedida.propTypes = {
    titulo: Proptypes.string.isRequired,
    children: Proptypes.node.isRequired,
};

export default Despedida;