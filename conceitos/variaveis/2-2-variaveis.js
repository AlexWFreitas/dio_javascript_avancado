

(() => {
    let test = 'valor função';
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        let test = 'valor if';
        console.log(`Valor dentro do if "${test}"`);
    }

    if (true) {
        let test = 'valor de outro if';
        console.log(`Valor dentro de outro if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();

// O primeiro let só existe dentro do bloco em que ele está.
// O segundo let só existe dentro do if.