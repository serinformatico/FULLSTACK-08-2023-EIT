import { PI, sumar, restar, multiplicar, dividir } from "./operaciones.js";

console.log(PI);

function convertirANumero(valor) {
    return Number(valor)
}

const calculadora = (props) => {
    const { inputNumeroA, inputNumeroB, inputResultado, tipoDeOperacion, btnCalcular } = props;

    btnCalcular.onclick = () => {
        const operaciones = {
            "+": sumar,
            "-": restar,
            "*": multiplicar,
            "/": dividir,
        };

        const numeroA = convertirANumero(inputNumeroA.value);
        const numeroB = convertirANumero(inputNumeroB.value);
        inputResultado.value = operaciones[tipoDeOperacion.value](numeroA, numeroB);
    };
};

export default calculadora;