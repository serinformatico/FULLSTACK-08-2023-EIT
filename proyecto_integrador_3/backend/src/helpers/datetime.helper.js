const convertDateTimeToString = (datetime) => {
    datetime = new Date(datetime).toJSON().replace("T", " ").slice(0, 19);
    return String(datetime);
};

const getDateTimeAsString = () => {
    const datetime = new Date().toJSON().replace("T", " ").slice(0, 19);
    return String(datetime);
};

const getDateTimeAsInteger = () => {
    const datetime = new Date().toJSON().replace("T", "").replaceAll("-", "").replaceAll(":", "").slice(0, 14);
    return Number(datetime);
};

module.exports = {
    convertDateTimeToString,
    getDateTimeAsString,
    getDateTimeAsInteger,
};