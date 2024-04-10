const fs = require("fs");

const fileExists = async (filePath) => {
    try {
        fs.accessSync(filePath);
        return true;
    } catch (error) {
        console.log("Archivo no encontrado");
        return false;
    }
};

const deleteFile = (filePath) => {
    const exists = fileExists(filePath);

    if (!exists) return false;

    try {
        fs.unlinkSync(filePath);
        return true;
    } catch (error) {
        console.log("Archivo no eliminado");
        return false;
    }
};

module.exports = { fileExists, deleteFile };