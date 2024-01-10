import { useContext } from "react";
import CounterContext from "../contexts/CounterContext";

import Text from "./Text";

const Sidebar = () => {
    const { count } = useContext(CounterContext);

    return (
        <aside>
            <Text>
                Soy el contador del Sidebar: {count}
            </Text>
        </aside>
    );
};

export default Sidebar;
