import { useEffect, useState } from "react";

const useLocalStorage = (initialValue = {}) => {
    const [ value, setValue ] = useState(initialValue);

    const exists = (key) => {
        if (window.localStorage.getItem(key) === null) {
            return false;
        }

        return true;
    };

    const synchronize = (initialValue) => {
        const synchronizedItems = {};

        for (const property in initialValue) {
            if (!exists(property)) {
                window.localStorage.setItem(property, JSON.stringify(initialValue[property]));
            }

            synchronizedItems[property] = JSON.parse(window.localStorage.getItem(property));
        }

        setValue(synchronizedItems);
    };

    useEffect(() => {
        synchronize(initialValue);
    }, []);

    const setItemValue = (key, newValue) => {
        window.localStorage.setItem(key, JSON.stringify(newValue));
        setValue({ ...value, [key]: newValue });
    };

    const removeItem = (key) => {
        window.localStorage.removeItem(key);
        const currentItems = { ...value };
        delete currentItems[key];
        setValue(currentItems);
    };

    const clearItems = () => {
        window.localStorage.clear();
        setValue({});
    };

    return {
        value,
        setItemValue,
        removeItem,
        clearItems,
    };
};

export default useLocalStorage;