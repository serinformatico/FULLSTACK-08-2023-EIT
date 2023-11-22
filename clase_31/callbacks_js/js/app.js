const resultA = document.getElementById("id-resultado-a");
const resultB = document.getElementById("id-resultado-b");
const nombres = ["Juan", "Lorena", "Pablo"];


// Callback como función externa (podría ser una función declarada o expresada)
const saludarPersona = (nombre) => {
    return "Hola " + nombre;
}

const saludarPersonas = (nombres, callback) => {
    for (let i = 0; i < nombres.length; i++) {
        const p = document.createElement("p");
        p.innerText = callback(nombres[i]);
        resultA.appendChild(p);
    }
}

saludarPersonas(nombres, saludarPersona);


// Callback como función interna (podría ser una función anónima o de flecha)
const despedirPersona = (nombre) => {
    return "Chau " + nombre;
}

const despedirPersonas = (nombres, callback) => {
    for (let i = 0; i < nombres.length; i++) {
        const p = document.createElement("p");
        p.innerText = callback(nombres[i]);
        resultB.appendChild(p);
    }
}

despedirPersonas(nombres, (nombre) => "Chau " + nombre);