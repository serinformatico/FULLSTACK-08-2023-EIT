function Client(id, firstname, lastname, email) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.accountBalance = 0;

    this.credit = function (value) {
        this.accountBalance += value;
    };

    this.debit = function (value) {
        this.accountBalance -= value;
    };
}

const cliente1 = new Client(1, "Lorena", "Medina", "lorena@gmail.com");
cliente1.credit(100);
console.log(cliente1);

const cliente2 = new Client(2, "Pablo", "Pérez", "pablo@gmail.com");
cliente2.debit(500);
cliente2.credit(700);
console.log(cliente2);


// Agregar una nueva propiedad o método a un objeto
cliente2.a = 10;
cliente2.b = 50;
cliente2.saludar = function () {
    console.log("Hola Mundo");
};

cliente2.saludar();

// Quitar una propiedad o método de un objeto
delete cliente2.b;
