import { Box } from "@mui/material";
import "./app.scss";

import useCounter from "./hooks/useCounter.js";
import useLocalStorage from "./hooks/useLocalStorage.js";

import { pizzas } from "./data/data.js";

const App = () => {
    const { count, decrement, increment } = useCounter();
    const localStorage = useLocalStorage({ count: 10, year: 2024, produts: pizzas });

    return (
        <Box>
            <h1>Custom Hooks</h1>
            <h2>Implementación de Contador</h2>
            <h2>Implementación de LocalStorage</h2>

            {/* CONTADOR - Versión que usa el custom hooks useCounter */}
            <p>{count}</p>
            <button onClick={() => decrement()}>-</button>
            <button onClick={() => increment()}>+</button>

            {/* CONTADOR - Versión que usa el custom hooks useLocalStorage */}
            <p>{localStorage.items.count}</p>
            <button onClick={() => localStorage.setItem("count", localStorage.items.count-1)}>-</button>
            <button onClick={() => localStorage.setItem("count", localStorage.items.count+1)}>+</button>

            <Box>
                <button onClick={() => localStorage.removeItem("count")}>Eliminar item</button>
                <button onClick={() => localStorage.clearItems()}>Eliminar todos los items</button>
                <button onClick={() => localStorage.setItem("saludo", "hola")}>Agregar item</button>
            </Box>
        </Box>
    );
};

export default App;