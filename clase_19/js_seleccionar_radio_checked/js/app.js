const radios = document.querySelectorAll("body section:last-of-type div input[type='radio']");
const boton = document.querySelector("body section:last-of-type div:last-of-type input[type='button']");

function getOptionChecked(inputsRadio) {
    for (let i = 0; i < inputsRadio.length; i++) {
        if (inputsRadio[i].checked) {
            return inputsRadio[i];
        }
    }
}

function mostrarValor() {
    let radio = getOptionChecked(radios);

    if (radio) {
        console.log(radio.value);
    }
}

boton.onclick = mostrarValor;