// Declaración de la clase Persona
class Persona {
    // Declaración de propiedades privadas
    #nombre;
    #apellido;
    #edad;

    // Declaración de propiedad pública
    hobbies = "";

    // Método especial constructor
    constructor(nombre, apellido, edad) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }

    // Getter de la propiedad privada nombre
    get nombre() {
        return this.#nombre;
    }

    // Getter de la propiedad privada apellido
    get apellido() {
        return this.#apellido;
    }

    // Getter de la propiedad privada edad
    get edad() {
        return this.#edad;
    }

    // Setter de la propiedad privada nombre
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    // Setter de la propiedad privada apellido
    set apellido(apellido) {
        this.#apellido = apellido;
    }

    // Setter de la propiedad privada edad
    set edad(edad) {
        this.#edad = edad;
    }

    // Método público
    caminar = function() {
        console.log("Caminando...");
    }

    // Método público
    correr = function () {
        console.log("Corriendo...");
    }
}

// Crea una instancia u objeto de la clase Persona
console.log("=== Objeto personaA ===\n");
const personaA = new Persona("Juan", "Pérez", 21);
personaA.hobbies = "Salir a correr y nadar";
personaA.edad = 25;
personaA.correr();
console.log(personaA);

// Crea una segunda instancia u objeto de la clase Persona
console.log("=== Objeto personaB ===\n");
const personaB = new Persona("Lorena", "Medina", 18);
personaB.hobbies = "Cantar";
personaB.caminar();
console.log(personaB);


/* ***************** HERENCIA DE PRIMER NIVEL ***************** */
class Empleado extends Persona{
    #sueldoBruto;
    #DEDUCCIONES = 17.0;

    constructor(nombre, apellido, edad, sueldoBruto) {
        // Primero: se pasan los parámetros al constructor de la clase padre
        super(nombre, apellido, edad);

        // Segundo: se declara la asignación de parámetros a las propiedades
        this.#sueldoBruto = sueldoBruto;
    }

    // Getter de la propiedad privada sueldo bruto
    get sueldoBruto() {
        return this.#sueldoBruto;
    }

    // Setter de la propiedad privada sueldo bruto
    set sueldoBruto(sueldoBruto) {
        this.#sueldoBruto = sueldoBruto;
    }

    // Método público
    calcularSueldoNeto = function () {
        const deducciones = this.#sueldoBruto / 100 * this.#DEDUCCIONES;
        const sueldoNeto = this.#sueldoBruto - deducciones;
        console.log(sueldoNeto.toFixed(2));
    }
}

// Crea una instancia u objeto de la clase Empleado
console.log("=== Objeto empleadoA ===\n");
const empleadoA = new Empleado("Paola", "Pereyra", 18, 1000);
empleadoA.edad = 30;
empleadoA.calcularSueldoNeto();
console.log(empleadoA);


/* ***************** HERENCIA DE SEGUNDO NIVEL ***************** */
class Profesor extends Empleado {
    #materias = [];

    constructor(nombre, apellido, edad, sueldoBruto, materias) {
        super(nombre, apellido, edad, sueldoBruto);
        this.#materias = materias;
    }

    // Getter de la propiedad privada materias
    get materias() {
        return this.#materias;
    }

    // Método público
    agregarMateria = function (materia) {
        this.#materias.push(materia);
    }

    // Método público
    quitarMateria = function (materia) {
        const indice = this.#materias.indexOf(materia);
        this.#materias.splice(indice, 1);
    }
}

// Crea una instancia u objeto de la clase Profesor
console.log("=== Objeto profesor1 ===\n");
const profesor1 = new Profesor("Carlos", "Pereyra", 25, 250, ['Informática I', 'Matemática I']);
profesor1.agregarMateria("Informática II");
profesor1.quitarMateria("Matemática I");
profesor1.calcularSueldoNeto();
profesor1.caminar();
console.log(profesor1);