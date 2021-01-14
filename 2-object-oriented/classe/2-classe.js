'use strict';

class Animal {
    constructor(qtdePatas = 2) { // qtdePatas aqui define o valor quando nada é passado na hora de criar. ( Valor Default )
        this.qtdePatas = qtdePatas; // Esse define o valor quando e passado um valor.
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4); // Chama o construtor da classe que herdou usando os paramêtros ou não.
        this.morde = morde; // Atribui ao this.morde o valor recebido no parâmetro morde
    }

    latir() {
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);