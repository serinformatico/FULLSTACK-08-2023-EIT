const coches = [
    {
        id: 1,
        marca: "Ford",
        modelo: "Ranger",
        anio: 2023,
    },
    {
        id: 2,
        marca: "Fiat",
        modelo: "Palio",
        anio: 2021,
    },
    {
        id: 3,
        marca: "Fiat",
        modelo: "Toro",
        anio: 2021,
    },
    {
        id: 4,
        marca: "Chevrolet",
        modelo: "S10",
        anio: 2019,
    },
    {
        id: 5,
        marca: "Chevrolet",
        modelo: "corsa",
        anio: 2018,
    },
    {
        id: 6,
        marca: "Fiat",
        modelo: 1,
        anio: 2009,
    },
    {
        id: 7,
        marca: "Fiat",
        modelo: "uno",
        anio: 2012,
    },
    {
        id: 8,
        marca: "Renault",
        modelo: "Sandero",
        anio: 2013,
    },
];

const generateId = () => {
    let maxId = 0;

    coches.forEach((item) => {
        if (item.id > maxId) {
            maxId = item.id;
        }
    });

    return maxId + 1;
};

module.exports = {
    coches,
    generateId,
};