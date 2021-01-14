'use strict';

class Animal {
    constructor(qtdePatas = 4) { // qtdePatas aqui define o valor quando nada é passado na hora de criar. ( Valor Default )
        this.qtdePatas = qtdePatas; // Esse define o valor quando e passado um valor.
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(); // Chama o construtor da classe que herdou usando os paramêtros ou não.
        this.morde = morde; // Atribui ao this.morde o valor recebido no parâmetro morde
    }
}

const pug = new Cachorro(false);

console.log(pug);