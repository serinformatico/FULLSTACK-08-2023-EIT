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

export default SuscriptorTwitchObserver;