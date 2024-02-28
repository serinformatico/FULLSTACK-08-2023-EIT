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
        setCount(count + 1);
        setCount(count + 2);
        setCount(count + 1);

        // 1° Solución al problema de sincronismo del useState
        // setCount((count) => count + 1);
        // setCount((count) => count + 2);
        // setCount((count) => count + 1);

        // 2° Solución al problema de sincronismo del useState
        // let newCount = count + 1;
        // newCount += 2;
        // newCount += 1;
        // setCount(newCount);
    };

    return (
        <>
            <div>
                <p>{count}</p>
                <button onClick={handleOnClickDecrement}>-</button>
                <button onClick={handleOnClickIncrement}>+</button>
                <button onClick={handleOnClickIncrement4}>+4</button>
            </div>
        </>
    );
};

export default App;