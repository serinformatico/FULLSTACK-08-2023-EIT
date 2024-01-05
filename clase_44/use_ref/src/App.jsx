import { useState, useRef } from "react";

import "./app.scss";

const App = () => {
    const countRef = useRef(0);
    const [ count, setCount ] = useState(countRef.current);

    const handleOnClickIncrement = () => {
        ++countRef.current;

        if (countRef.current >= 5) {
            setCount(countRef.current);
        }

        console.log(countRef.current);
    };

    const handleOnClickDecrement = () => {
        if (countRef.current > 0) {
            --countRef.current;
        }

        if (countRef.current >= 5) {
            setCount(countRef.current);
        }

        console.log(countRef.current);
    };

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleOnClickIncrement}>Incrementar</button>
            <button onClick={handleOnClickDecrement}>Decrementar</button>
        </div>
    );
};

export default App;