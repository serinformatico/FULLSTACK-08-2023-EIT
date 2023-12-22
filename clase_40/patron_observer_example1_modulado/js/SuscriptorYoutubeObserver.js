class SuscriptorYoutubeObserver {
    nombre;
    apellido;

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    // Método público funcional al patrón Observer *
    update = function (message) {
        console.log(`Youtube: ${this.nombre} ${this.apellido} ${message}`);
    }
}

export default SuscriptorYoutubeObserver;