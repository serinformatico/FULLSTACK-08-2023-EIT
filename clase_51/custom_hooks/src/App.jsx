import { useState } from "react";
import { Box } from "@mui/material";
import "./app.scss";

const App = () => {

    const [ count, setCount ] = useState(0);

    const decrement = () => {
        setCount(count - 1);
    };

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <Box>
            <h1>Custom Hooks</h1>
            <h2>Implementación de Contador</h2>
            <h2>Implementación de LocalStorage</h2>

            <p>{count}</p>
            <button onClick={() => decrement()}>-</button>
            <button onClick={() => increment()}>+</button>
        </Box>
    );
};

export default App;