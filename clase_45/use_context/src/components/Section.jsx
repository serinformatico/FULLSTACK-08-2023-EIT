import { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

import Text from "./Text";
import Button from "./Button";

const Section = () => {
    const { count, setCount } = useContext(CounterContext);

    const handleOnClickDecrement = () => {
        setCount(count - 1);
    };

    const handleOnClickIncrement = () => {
        setCount(count + 1);
    };

    return (
        <section>
            <Text>
                Soy el contador de la sección: {count}
            </Text>
            <Button title="-" onclick={handleOnClickDecrement} />
            <Button title="+" onclick={handleOnClickIncrement} />
        </section>
    );
};

export default Section;
