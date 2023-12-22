// Identifica y rectifica el tipo de dato de un valor
const setDataType = (value) => {
    let numberValue = Number(value);

    if (typeof value === "boolean" && typeof value != "number") {
        return Boolean(value);
    }

    if (!Number.isNaN(numberValue) && Number.isInteger(numberValue)) {
        return Number.parseInt(numberValue);
    }

    if (!Number.isNaN(numberValue) && !Number.isInteger(numberValue)) {
        return Number.parseFloat(numberValue).toFixed(2);
    }

    try {
        return JSON.parse(value);
    } catch (error) {
        return value;
    }
};

export { setDataType };