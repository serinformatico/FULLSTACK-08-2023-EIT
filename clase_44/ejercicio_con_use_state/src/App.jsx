import { useRef, useState } from "react";
import "./app.scss";

const App = () => {
    const colorRef = useRef();
    const [color, setColor] = useState();
    const [colores, setColores] = useState(["azul", "rojo"]);

    const handleOnChangeColor = (color) => {
        colorRef.current = color;
    };

    const handleOnClickSave = () => {
        // Bloque optimizado
        const nuevosColores = [...colores, colorRef.current];
        setColores(nuevosColores);

        // Bloque alternativo
        // const nuevosColores = colores.map((color) => color);
        // nuevosColores.push(colorRef.current);
        // setColores(nuevosColores);
    };

    const handleOnClickModify = (color) => {
        colorRef.current = color;
        setColor(colorRef.current);
        // const coloresConModificacion = colores.toSpliced(index, 1, color);
        // setColores(coloresConModificacion);
    };

    const handleOnClickDelete = (index) => {
        const coloresConEliminacion = colores.toSpliced(index, 1);
        setColores(coloresConEliminacion);
    };

    return (
        <div>
            <div>
                <label htmlFor="color">Color </label>
                <input type="text" id="color" onChange={(e) => handleOnChangeColor(e.target.value)} value={color} />
                <button onClick={handleOnClickSave}>Guardar</button>
            </div>
            <div>
                <ul>
                    {colores.map((color, index) => (
                        <li key={index}>
                            {color}
                            <button onClick={() => handleOnClickModify(color)}>Modificar</button>
                            <button onClick={() => handleOnClickDelete(index)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;