import { useState } from "react";
import "./app.scss";

const App = () => {
    const [ count, setCount ] = useState(0);

    const handleOnClickDecrement = () => {
        setCount(count - 1);
    };

    const handleOnClickIncrement = () => {
        setCount(count + 1);
    };

    const handleOnClickIncrement4 = () => {
        setCount(count + 1); // 1
        setCount(count + 2); // 1+2 3
        setCount(count + 1); // 3 +1 4

        // 1° solucion
        // setCount((count) => count + 1);
        // setCount((count) => count + 2);
        // setCount((count) => count + 1);

        // 2° solucion
        // let newCount = count + 1;
        // newCount += 2;
        // newCount += 1;

        // setCount(newCount);

    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleOnClickDecrement}>-</button>
            <button onClick={handleOnClickIncrement}>+</button>
            <button onClick={handleOnClickIncrement4}>+4</button>
        </div>
    );
};

export default App;