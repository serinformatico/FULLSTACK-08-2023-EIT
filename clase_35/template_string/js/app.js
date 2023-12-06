const demoMultiline = document.getElementById("demo-multiline");
const demoConcatenation = document.getElementById("demo-concatenation");

let textMultiline =`Soy un texto de
                    multiples líneas`;
demoMultiline.innerHTML = textMultiline;

let firstname = "Hola Mundo";

function getAge() {
    let age = 25;
    return age + 1;
}

let textConcatenation = `Hola Muno. Mi nombre es ${firstname} y tengo ${getAge()} años`;
demoConcatenation.innerText = textConcatenation;