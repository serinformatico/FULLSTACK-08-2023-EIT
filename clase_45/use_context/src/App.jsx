import { useState } from "react";
import "./app.scss";

import Main from "./components/Main";
import CounterContext from "./contexts/CounterContext";

const App = () => {
    const [ count, setCount ] = useState(0);

    return (
        <>
            <header>Header</header>

            <CounterContext.Provider value={{ count, setCount, a: 2 }}>
                <Main/>
            </CounterContext.Provider>

            <footer>Footer</footer>
        </>
    );
};

export default App;