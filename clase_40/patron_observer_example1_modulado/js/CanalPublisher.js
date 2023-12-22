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

export default CanalPublisher;