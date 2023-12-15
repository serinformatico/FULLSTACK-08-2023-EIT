// // Arrays - Métodos splice includes indexOf findIndex

// const colores = ['rojo', 'blanco', 'verde', 'negro', 'gris', 'rosado', 'azul'];
// console.log(colores);



// let indiceDeGris = colores.indexOf('gris');
// colores.splice(indiceDeGris, 1);

// let nuevoColor = 'celeste';
// let resultado = colores.includes(nuevoColor);

// if (!resultado) {
//     colores.push(nuevoColor);
// }

// // colores.includes('rosa') || colores.push('rosa');

// console.log(colores);

const Crearcoche = function (marca, color, anio, stock) {
    this.marca = marca;
    this.color = color;
    this.anio = anio;
    this.stock = stock;
}

const coches = [
    new Crearcoche('fiat', 'verde', 2015, 5),
    new Crearcoche('ford', 'rojo', 2020, 10),
    new Crearcoche('dodge', 'rojo', 2021, 2),
    new Crearcoche('renault', 'verde', 2015, 5),
    new Crearcoche('fiat', 'gris', 2023, 0),
    new Crearcoche('ford', 'negro', 2010, 1),
];

const indiceDeFiat = coches.findIndex((coche) => {
    return coche.marca === 'ford' && coche.color === 'rojo';
});
console.log(coches[indiceDeFiat]);


const textoBuscado = document.getElementById('texto-buscado');
const btnBuscar = document.getElementById('btn-buscar');
const resultadoBusqueda = document.getElementById('resultado-busqueda');
const totalContador = document.getElementById('total');

let cochesAMostrar = [];

const calcularTotal = () => {
    let total = 0;

    cochesAMostrar.forEach((coche, indice) => {
        const valor = document.getElementById(`contador${indice}`).value;
        total += Number(valor);

    });

    totalContador.innerText = total;
}

const agregar = (indice) => {
    const contador = document.getElementById(`contador${indice}`);
    let valor = Number(contador.value);
    contador.value = valor < cochesAMostrar[indice].stock ? ++valor : valor;
    calcularTotal();
}

const quitar = (indice) => {
    const contador = document.getElementById(`contador${indice}`);
    let valor = Number(contador.value);
    contador.value = valor === 0 ? valor : --valor;
    calcularTotal();
}

const buscarCoche = () => {
    const cochesFiltradosPorCoincidencia = coches.filter((coche) => coche.marca.includes(textoBuscado.value));
    resultadoBusqueda.innerHTML = "";

    cochesAMostrar = !textoBuscado.value ? coches : cochesFiltradosPorCoincidencia;

    cochesAMostrar.forEach((coche, indice) => {
        const marca = document.createElement('p');
        marca.innerText = `marca: ${coche.marca}`;

        const color = document.createElement('p');
        color.innerText = `color: ${coche.color}`;

        const buttonAgregar = document.createElement('button');
        buttonAgregar.setAttribute('id', `btn-agregar${indice}`);
        buttonAgregar.innerText = "+";
        buttonAgregar.onclick = () => agregar(indice);

        const inputContador = document.createElement('input');
        inputContador.setAttribute('type', 'number');
        inputContador.setAttribute('id', `contador${indice}`);
        inputContador.value = 0;

        const buttonQuitar = document.createElement('button');
        buttonQuitar.setAttribute('id', `btn-quitar${indice}`);
        buttonQuitar.innerText = "-";
        buttonQuitar.onclick = () => quitar(indice);

        const divCoche = document.createElement("div");
        divCoche.style.display = "flex";
        divCoche.style.gap = "1vw";
        divCoche.append(marca);
        divCoche.append(color);
        divCoche.append(buttonAgregar);
        divCoche.append(buttonQuitar);
        divCoche.append(inputContador);

        resultadoBusqueda.append(divCoche);
    });
}

btnBuscar.onclick = buscarCoche;

window.onload = buscarCoche;