const normalizeText = (value) => {
    return value
        .toUpperCase()
        .trim()
        .replace("Á", "A")
        .replace("É", "E")
        .replace("Í", "I")
        .replace("Ó", "O")
        .replace("Ú", "U");
};

module.exports = {
    normalizeText,
};