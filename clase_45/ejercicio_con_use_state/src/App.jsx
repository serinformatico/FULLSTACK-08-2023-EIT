import { useState } from "react";
import "./app.scss";

const App = () => {
    const [colors, setColors] = useState([
        { id: 1, name: "azul" },
        { id: 2, name: "grís" },
        { id: 3, name: "blanco" },
    ]);
    const [inputNewColor, setInputNewColor] = useState("");

    const generateId = () => {
        let maxId = 0;

        colors.forEach((color) => {
            if (color.id > maxId) {
                maxId = color.id;
            }
        });

        return maxId + 1;
    };

    const handleOnChangeNewColor = (e) => {
        // Actualiza el valor de input mientras se escribe
        setInputNewColor(e.target.value);
    };

    const handleOnClickAddColor = () => {
        if (inputNewColor.trim().length > 0) {
            // Crea un nuevo color con un id nuevo (debe ser unico)
            const newColor = { id: generateId(), name: inputNewColor };

            // Actualiza el estado de la lista de colores
            setColors([...colors, newColor]);

            // Resetea el input de "Nuevo Color"
            setInputNewColor("");
        }
    };

    const handleOnChangeModifyColor = (id, value) => {
        // Busca el índice del elemento que corresponde al ID recibo
        const index = colors.findIndex((color) => color.id === id);

        // Clona le lista de colores
        const cloneColors = [...colors];

        // Modifica el nombre del color en realación a índice del ID
        cloneColors[index].name = value;

        // Actualiza el estado de la lista de colores
        setColors(cloneColors);
    };

    const handleOnClickDeleteColor = (id) => {
        // Busca el índice del elemento que corresponde al ID recibo
        const index = colors.findIndex((color) => color.id === id);

        // Crea un nuevo array que no incluye el elemento eliminado
        const currentColors = colors.toSpliced(index, 1);

        // Actualiza el estado de la lista de colores
        setColors(currentColors);
    };

    return (
        <div>
            <div>
                <label htmlFor="color">Nuevo Color </label>
                <input
                    type="text"
                    id="color"
                    value={inputNewColor}
                    onChange={(e) => handleOnChangeNewColor(e)} />
                <button onClick={handleOnClickAddColor}>Agregar Color</button>
            </div>
            <div>
                <ul>
                    {colors.map((color) => (
                        <li key={color.id}>
                            <input
                                type="text"
                                value={color.name}
                                onChange={(e) => handleOnChangeModifyColor(color.id, e.target.value)} />
                            <button onClick={() => handleOnClickDeleteColor(color.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;