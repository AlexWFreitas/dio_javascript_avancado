(() => {
    const test = 'examplo de escopo de bloco';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        const test = 'valor dentro do bloco if';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

// Funciona similar ao Let. Respeitando escopo de bloco.
// Const do tipo primitivo, não permite a alteração de valor.
// Const de objeto ou array permite alterar os valores, 
// porém não consegue alterar para onde o objeto ou array aponta.
// Exemplo:

// const array = ['Alex', 'Eduardo'];
// array.push('Joao'); // Pode
// array.shift(); Pode
// const array = [] // Não pode.