// Identifica y rectifica el tipo de dato de un valor
const setDataType = (value) => {
    if (value === "true" || value === true) {
        return true;
    }

    if (value === "false" || value === false) {
        return false;
    }

    let numberValue = Number(value);
    if (!Number.isNaN(numberValue)) {
        if (Number.isInteger(numberValue)) {
            return Number.parseInt(numberValue);
        }

        return Number.parseFloat(numberValue).toFixed(2);
    }

    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
};

export { setDataType };