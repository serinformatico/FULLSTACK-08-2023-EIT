const Client = (id, firstname, lastname, email) => {
    return {
        id,
        firstname,
        lastname,
        email,
        accountBalance: 0,
        credit: function (value) {
            this.accountBalance += value;
        },
        debit: function (value) {
            this.accountBalance -= value;
        },
    };
}

const cliente1 = Client(1, "Lorena", "Medina", "lorena@gmail.com");
cliente1.credit(100);
console.log(cliente1);

const cliente2 = Client(2, "Pablo", "Pérez", "pablo@gmail.com");
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