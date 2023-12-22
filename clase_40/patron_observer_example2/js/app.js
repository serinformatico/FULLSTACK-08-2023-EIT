const textAreaPublisher = document.getElementById("publisher");
const textAreaObserver1 = document.getElementById("observer-1");
const textAreaObserver2 = document.getElementById("observer-2");
const textAreaObserver3 = document.getElementById("observer-3");
const btnPublisher = document.getElementById("btn-publisher");

class DivPublisher {
    elementHTML;
    subscribers = [];

    constructor(elementHTML) {
        this.elementHTML = elementHTML;
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
    notify = function () {
        this.subscribers.forEach((subscriber) => {
            subscriber.update(this.elementHTML.value);
        });
    }
}

class DivObserver {
    elementHTML;

    constructor(elementHTML) {
        this.elementHTML = elementHTML;
    }

    // Método público funcional al patrón Observer *
    update = function (message) {
        this.elementHTML.value = message;
    }
}

class DivObserverToUpperCase {
    elementHTML;

    constructor(elementHTML) {
        this.elementHTML = elementHTML;
    }

    // Método público funcional al patrón Observer *
    update = function (message) {
        this.elementHTML.value = message.toUpperCase();
    }
}

class DivObserverWithFilter {
    elementHTML;
    textToSearch

    constructor(elementHTML, textToSearch) {
        this.elementHTML = elementHTML;
        this.textToSearch = textToSearch;
    }

    // Método público funcional al patrón Observer *
    update = function (message) {
        const textFound = message.includes(this.textToSearch);
        if (textFound) {
            this.elementHTML.value = this.textToSearch;
        }
    }
}

const observer1 = new DivObserver(textAreaObserver1);
const observer2 = new DivObserverToUpperCase(textAreaObserver2);
const observer3 = new DivObserverWithFilter(textAreaObserver3, "hola");

const publisher = new DivPublisher(textAreaPublisher);
publisher.subscribe(observer1);
publisher.subscribe(observer2);
publisher.subscribe(observer3);

btnPublisher.onclick = () => {
    publisher.notify();
};