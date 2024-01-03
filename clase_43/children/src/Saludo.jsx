import Proptypes from "prop-types";

const Saludo = (props) => {
    const { nombre, apellido, edad } = props;
    const edadMasAños = `, ${edad} años`;

    return (
        <h1 className="title">Hola {nombre} {apellido}{edadMasAños}</h1>
    );
};

Saludo.propTypes = {
    nombre: Proptypes.string.isRequired,
    apellido: Proptypes.string,
    edad: Proptypes.number,
};

// Valores por defecto cuando las porps llegan como null o undefined
Saludo.defaultProps = {
    edad: 18,
};

export default Saludo;