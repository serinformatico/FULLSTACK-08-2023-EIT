function getValor(elementos) {
    let nombres = "";
    let apellidos = "";

    for (let i = 0; i < elementos.length; i++) {
        let cantidadDeCaracteres = elementos[i].innerHTML.length;

        if (cantidadDeCaracteres > 0) {
            if (i === 0 || i === 1) {
                nombres += elementos[i].innerHTML + " ";
            } else if (i === 2 || i === 3) {
                apellidos += elementos[i].innerHTML + " ";
            }
        }
    }

    return '"' + nombres + apellidos.trim().toUpperCase() + '"';
}

function buscarCoincidencias(datosDelIntegrante1, datosDelIntegrante2) {
    for (let i = 0; i < datosDelIntegrante1.length; i++) {

        if (i === 0 || i === 1) {
            for (let j = 0; j < datosDelIntegrante2.length; j++) {

                if (j === 0 || j === 1) {
                    if (datosDelIntegrante1[i].innerHTML === datosDelIntegrante2[j].innerHTML) {
                        datosDelIntegrante1[i].style.color = "red";
                        datosDelIntegrante2[i].style.color = "red";
                        console.log("Hubo coincidencias");
                    }
                }
            }
        }
    }
}

const datos               = document.querySelectorAll("dd");
const datosDelIntegrante1 = [datos[0], datos[1], datos[2], datos[3]];
const datosDelIntegrante2 = [datos[4], datos[5], datos[6], datos[7]];

function ejecutar() {
    let integrante1 = getValor(datosDelIntegrante1);
    let integrante2 = getValor(datosDelIntegrante2);
    console.log(integrante1 + "\n" + integrante2);
    buscarCoincidencias(datosDelIntegrante1, datosDelIntegrante2);
}