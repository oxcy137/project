class display{
    constructor(displayvaloranterior. displayvaloractual) {
        this.displayvaloractual = displayvaloractual;
        this.displayvaloranterior = displayvaloranterior;
        this.calculadora = new calculadora();
        this.valoractual = '';
        this.valoranterior = '';
    }
    agragarnumero(numero) {
        this.valoractual = numero;

    }
}