import { useEffect, useRef, useState } from "react";

import "./app.scss";

const App = () => {
    const countRef = useRef();
    const [ count, setCount ] = useState();

    useEffect(() => {
        if (isNaN(count)) {
            setCount(0);
        }

        if (count > countRef.current) {
            console.log("soy el useEffect");
        }
    }, [count]);

    const handleOnClickIncrement = () => {
        countRef.current = count;
        setCount(count + 1);
    };

    const handleOnClickDecrement = () => {
        countRef.current = count;
        if (count > 0) {
            setCount(count - 1);
        }
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