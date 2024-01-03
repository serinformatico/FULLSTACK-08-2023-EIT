import { useState } from "react";
import "./app.scss";

const App = () => {
    const [ count, setCount ] = useState(0);

    const handleOnClickDecrement = () => {
        setCount(count + 1);
    };

    const handleOnClickIncrement = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleOnClickDecrement}>-</button>
            <button onClick={handleOnClickIncrement}>+</button>
        </div>
    );
};

export default App;