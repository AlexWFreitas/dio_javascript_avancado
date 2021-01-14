function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();


// Hoisting é a capacidade de pegar variavel ou função que estão declaradas depois de serem chamadas.
// Hoisting de Váriavel, só declara a variavel, mas não define ela.
// Hoisting de Função, consegue puxar a função inteira.