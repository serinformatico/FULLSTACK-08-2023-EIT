import { sumar, restar, multiplicar, dividir } from "./operaciones.js";

const calculadora = function (props) {
    const { inputNumeroA, inputNumeroB, selectTipoDeOperacion, inputResultado, btnCalcular } = props;

    btnCalcular.onclick = () => {
        const operaciones = {
            '+': sumar,
            '-': restar,
            '*': multiplicar,
            '/': dividir,
        };

        const operacionSeleccionada = operaciones[selectTipoDeOperacion.value];
        const numeroA = Number(inputNumeroA.value);
        const numeroB = Number(inputNumeroB.value);
        inputResultado.value = operacionSeleccionada(numeroA, numeroB);
    };
};

export default calculadora;