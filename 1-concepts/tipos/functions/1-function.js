// Funçẽos são Objetos

function fn() {
    return 'Code here';
}

const arrowFn = () => 'Code here'; // Retorno implícito no Arrow Function.
const arrowFn2 = () => { 
    // Mais de uma expressão
    return 'Code here';
}


// Funções também são objetos
fn.prop = 'Posso criar propriedades';

// console.log(fn());
// console.log(fn.prop); 
// Prova de que é um objeto.

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções

const controlFnExec = fnParam => allowed => {
    if (allowed) {
        logFnResult(fnParam);
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution(); // Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam();
        }
    }
}
