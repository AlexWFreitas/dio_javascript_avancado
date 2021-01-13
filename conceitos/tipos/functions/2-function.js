(() => {
    this.name = 'arrow function'
    const getNameArrowFn = () => this.name;

    function getName() {
        return this.name;
    }

    const user = {
        name: 'Nome no objeto de execução',
        getNameArrowFn,
        getName
    }

    console.log(user.getNameArrowFn());
    console.log(user.getName());
})();

// Sobre Arrow Function: Diferença importante.
// A Arrow Function cria uma variavel, isso significa que as variaveis usadas 
// nela usam o escopo do bloco onde a função foi definida e não onde ela foi chamada.
// A função normal geralmente considera o contexto que foi executada.