// Hoisting = Levantar ou suspender algo.

function fn() {
    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

// JavaScript tem Hoisting.
// A variavel é declarada, mas não foi definida. ( Ele declara as variavies existentes no código fora de ordem ).
// text retorna undefined no primeiro log.


function fn2() {
    var text;
    console.log(text);

    text = 'Exemplo';

    console.log(text);
}

fn2();