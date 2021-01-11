// Exemplo de Escopo Global vs Excopo de Função. var local tem prioridade.
// Se remover a var local, a var global é utilizada.

var test = 'example'; 

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        var test = 'example2';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

// o var do if, não respeita o escopo de bloco, logo ele sobe pro closure.