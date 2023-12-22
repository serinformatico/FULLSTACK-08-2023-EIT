class CanalPublisher {
    nombreDelCanal;
    subscribers = [];

    constructor(nombreDelCanal) {
        this.nombreDelCanal = nombreDelCanal;
    }

    // Método público funcional al patrón Observer *
    subscribe = function (observer) {
        this.subscribers.push(observer);
    }

    // Método público funcional al patrón Observer *
    unsubscribe = function (observer) {
        const indice = this.subscribers.findIndex((subscriber) => JSON.stringify(subscriber) === JSON.stringify(observer));
        this.subscribers.splice(indice, 1);
    }

    // Método público funcional al patrón Observer *
    notify = function (message) {
        this.subscribers.forEach((subscriber) => {
            subscriber.update(message);
        });
    }

    notifyNewVideo = function (title) {
        this.notify(`nos complace comunicarte que se subió un nuevo video. "${title}"`);
    }
}

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

class SuscriptorTwitchObserver {
    clientID;
    fullName;
    isLegalAge;

    constructor(clientID, fullName, isLegalAge) {
        this.clientID = clientID;
        this.fullName = fullName;
        this.isLegalAge = isLegalAge;
    }

    // Método público funcional al patrón Observer *
    update = function (message) {
        console.log(`Twitch: ${this.fullName} ${message}`);
    }
}

const juana = new SuscriptorYoutubeObserver("Juana", "Pérez");
const pedro = new SuscriptorYoutubeObserver("Pedro", "Páez");
const mariana = new SuscriptorYoutubeObserver("Mariana", "Ortega");
const pablo = new SuscriptorTwitchObserver(125480, "Pablo A. Rivero", true);
const leonel = new SuscriptorTwitchObserver(250444, "Leonel M. Medina", true);

const miCanal = new CanalPublisher("Mi Canal de POO");
miCanal.subscribe(juana);
miCanal.subscribe(pedro);
miCanal.subscribe(mariana);
miCanal.subscribe(pablo);
miCanal.subscribe(leonel);

miCanal.notifyNewVideo("Aprendiendo el patrón State");
miCanal.unsubscribe(juana);
miCanal.notifyNewVideo("Aprendiendo el patrón Observer");
miCanal.unsubscribe(pablo);
miCanal.notifyNewVideo("Aprendiendo el patrón Strategy");
console.log(miCanal);