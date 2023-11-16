/* ************ Manipulación de Estilos ************ */
let seccion1 = document.querySelector('#id-section1');
let pDeSeccion1 = document.querySelector('#id-section1 p');
    // 1° Seleccionar la propiedad CSS por medio de style
    // 2° Asignar el valor de la propiedad
    seccion1.style.border = '1px solid red';
    seccion1.style.padding = '3px';
    pDeSeccion1.style.color = "red";
    pDeSeccion1.style.textDecoration = "underline";
    // 3° Leer el valor de las propiedades asignadas
    console.log("\nManipulación de Estilos");
    console.log(seccion1.style.border);
    console.log(pDeSeccion1.style.textDecoration);



/* ************ Manipulación de Contenidos ************ */
let pDeSeccion2 = document.querySelector('#id-section2 p');
let smallDeSeccion2 = document.querySelector('#id-section2 small');
let inputTextDeSeccion2 = document.querySelector('#id-section2 input[type="text"]');
let inputCheckBoxDeSeccion2 = document.querySelector('#id-chequeo');
let inputRadioDeSeccion2 = document.querySelectorAll('#id-section2 input[name="opciones"]');
let inputSelectDeSeccion2 = document.querySelector('#id-pais');

    // 1° Asignar el contenido de los elementos HTML
    pDeSeccion2.innerHTML = "Este es un contenido HTML que se insertó desde <strong>JavaScript</strong>";
    smallDeSeccion2.innerText = "Este es un contenido textual que se insertó desde <strong>JavaScript</strong>";
    inputTextDeSeccion2.value = "Este valor se insertó desde JavaScript";
    inputCheckBoxDeSeccion2.checked = 1;
    inputRadioDeSeccion2[1].checked = 1;
    inputSelectDeSeccion2.value = 2;
    // 2° Leer el contenido de los elementos HTML
    console.log("\nManipulación de Contenidos");
    console.log(pDeSeccion2.innerHTML);
    console.log(inputTextDeSeccion2.value);
    console.log(inputCheckBoxDeSeccion2.checked);
    console.log(inputRadioDeSeccion2[0].checked, inputRadioDeSeccion2[1].checked);
    console.log(inputSelectDeSeccion2.value);



/* ************ Manipulación de Atributos ************ */
let pDeSeccion3 = document.querySelector('#id-section3 p');
let inputNumberDeSeccion3 = document.querySelector('#id-section3 input[type="number"]');

// 1° Colocar un atributo a un elemento HTML
pDeSeccion3.setAttribute('id', 'id-desde-js');
pDeSeccion3.setAttribute('class', 'clase-desde-js');

console.log("\nManipulación de Atributos");
// 2° Obtener el valor del atributo de un elemento HTML
let pDeSeccion3ObtenerId = pDeSeccion3.getAttribute('id');
let pDeSeccion3ObtenerClass = pDeSeccion3.getAttribute('class');
    console.log("Qué valor tiene id: ", pDeSeccion3ObtenerId);
    console.log("Qué valor tiene class: ", pDeSeccion3ObtenerClass);

// 3° Preguntar si un elemento HTML tiene cierto atributo
let pDeSeccion3TieneUnId = pDeSeccion3.hasAttribute('id');
let pDeSeccion3TieneUnName = pDeSeccion3.hasAttribute('name');
    console.log("Tiene atributo id: ", pDeSeccion3TieneUnId);
    console.log("Tiene atributo name: ", pDeSeccion3TieneUnName);

// 4° Elimnar un atributo de un elemento HTML
let inputNumberDeSeccion3BorrarPlaceholder = inputNumberDeSeccion3.removeAttribute('placeholder');
let inputNumberDeSeccion3BorrarName = inputNumberDeSeccion3.removeAttribute('name');



/* ************ Manipulación de Eventos ************ */
let pDeSeccion4 = document.querySelector('#id-section4 p');
let buttonDeSeccion4 = document.querySelector('#id-section4 button');

// 1° Declarar una función
function cambiarColorDelParrafo() {
    if (pDeSeccion4.style.color === 'red') {
        pDeSeccion4.style.color = 'green'
    } else {
        pDeSeccion4.style.color = 'red';
    }
}

// 2° Invocar la función por medio del evento click del botón
buttonDeSeccion4.onclick = cambiarColorDelParrafo;  // Declarar sin paréntesis

// 3° Invocar la función por medio del evento double-click sobre el párrafo
pDeSeccion4.ondblclick = cambiarColorDelParrafo;    // Declarar sin paréntesis



/* ************ Manipulación de Elementos ************ */
let divDeSeccion5 = document.querySelector('#id-section5 div');
let buttonDeSeccion5Agregar = document.querySelector('#id-agregar');
let buttonDeSeccion5Modificar = document.querySelector('#id-modificar');
let buttonDeSeccion5Eliminar = document.querySelector('#id-eliminar');
let buttonDeSeccion5EliminarTodo = document.querySelector('#id-eliminar-todo');
let textoDelNuevoElemento = "Nuevo elemento desde JS";

// 1° Declarar la función agregar
function agregarParrafo() {
    let p = document.createElement("p");    // A. Crear un elemento de tipo p
    p.innerText = textoDelNuevoElemento;    // B. Agregar contenido al elemento
    divDeSeccion5.appendChild(p);           // C. Añadir elemento p al div
}

// 2° Declarar la función modificar
function modificarParrafo() {
  //  divDeSeccion5.innerHTML = "<p> Texto Modificado</p>";
}

// 3° Declarar la función eliminar
function eliminarElemento() {
    let elementos = divDeSeccion5.childNodes;   // Obtiene los nodos hijos del div

    console.dir(elementos);                     // Muestra una lista de objetos (NodeLsit)
    console.dir(elementos[0]);                  // Muestra el objeto (Node)

    if (elementos[0]) {
        divDeSeccion5.removeChild(elementos[0]);    // Elimina el primer nodo del div
    }
}

// 4° Declarar la función eliminar todo
function eliminarElementoTodo() {
    divDeSeccion5.remove();    // Elimina todos los nodos del div
}

// 5° Invocar cada función por medio del evento click de cada botón
buttonDeSeccion5Agregar.onclick = agregarParrafo;            // Declarar sin paréntesis
buttonDeSeccion5Modificar.onclick = modificarParrafo;        // Declarar sin paréntesis
buttonDeSeccion5Eliminar.onclick = eliminarElemento;         // Declarar sin paréntesis
buttonDeSeccion5EliminarTodo.onclick = eliminarElementoTodo; // Declarar sin paréntesis
