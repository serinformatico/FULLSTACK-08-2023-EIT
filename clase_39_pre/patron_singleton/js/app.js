// Patrón Singleton hecho con una función constructora.
const codigoPorRenderizado = function() {
    this.instancia;

    this.generarCodigo = function (instancia) {
        if (instancia != undefined) {
            return instancia;
        }

        return Math.random() * 10;
    };

    this.instancia = this.generarCodigo(this.instancia);

    return {
        codigo: this.instancia,
    };
};

console.log(codigoPorRenderizado());
console.log(codigoPorRenderizado());
console.log(codigoPorRenderizado());


// Patrón Singleton hecho con una clase.
class CodigoPorRenderizado {
    static instancia;
    #codigo;

    constructor() {
        if (CodigoPorRenderizado.instancia) {
            throw new Error("No se puede crear una nueva instancia");
        }

        CodigoPorRenderizado.instancia = this;
        this.#codigo = Math.random() * 10;
    }

    get codigo() {
        return this.#codigo;
    }
};

const CodigoA = new CodigoPorRenderizado();
// const CodigoB = new CodigoPorRenderizado();
// const CodigoC = new CodigoPorRenderizado();

console.log(CodigoA.codigo);
console.log(CodigoA.codigo);
console.log(CodigoA.codigo);