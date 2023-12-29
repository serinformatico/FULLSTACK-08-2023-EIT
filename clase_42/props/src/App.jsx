import PropTypes from "prop-types";

// La siguiente línea de código, importa la hoja de estilos.
import "./app.scss";

const SubTitle = () => {
    return (
        <h2>Soy React!</h2>
    );
};

const Title = () => {
    return (
        <div>
            <h1 className="title">Hola Mundo1</h1>
            <SubTitle />
        </div>
    );
};

const Section = () => {
    return (
        <section>
            <h3>Título de la sección</h3>
            <p>Lorem ipsum dolor sit amet.</p>
        </section>
    );
};

const Button = (props) => {
    const { nombreSaludar, nombreDespedir, handleClickDespedir } = props;

    const handleClickSaludar = (nombre) => {
        alert("Hola " + nombre);
    };

    return (
        <>
            <button onClick={() => handleClickSaludar(nombreSaludar)}>Saludar</button>
            <button onClick={() => handleClickDespedir(nombreDespedir)}>Despedir</button>
        </>
    );
};

Button.propTypes = {
    nombreSaludar: PropTypes.string.isRequired,
    nombreDespedir: PropTypes.string,
    handleClickDespedir: PropTypes.func.isRequired,
};

const GalleryItem = (props) => {
    const { titulo } = props;

    return (
        <div className="card">
            <h4>{titulo}</h4>
            <div className="grafico"></div>
        </div>
    );
};

GalleryItem.propTypes = {
    titulo: PropTypes.string.isRequired,
};

const Gallery = () => {

    const titulos = ["1° Titulo A", "2° Titulo", "3° Titulo", "4° Titulo", "5° Titulo", "6° Titulo", "7° Titulo"];

    return (
        <div className="gallery">
            {titulos.map((titulo, indice) => (<GalleryItem key={`titulo-${indice}`} titulo={titulo} />))}
        </div>
    );
};

const App = () => {
    let edad = 18;

    const determinarEdad = () => {
        if (edad >= 18) {
            return "Sos mayor de edad";
        }

        return "Sos menor de edad";
    };

    const handleClickDespedir = (nombre) => {
        alert("Chau " + nombre);
    };

    let nombre = "Pablo";
    return (
        <div>
            <Title />
            <Button nombreSaludar={nombre} nombreDespedir="Lorena" handleClickDespedir={handleClickDespedir}/>
            <Section />
            <p>{determinarEdad()}</p>

            {edad >= 18
                ? (<p>Sos mayor de edad. Tenes {edad} años</p>)
                : (<p>Sos menor de edad. Tenes {edad} años</p>)
            }

            <Gallery />
        </div>
    );
};

export default App;