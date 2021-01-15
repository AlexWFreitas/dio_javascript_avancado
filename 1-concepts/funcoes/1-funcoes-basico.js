// If you are looking for more advanced info, go to tipos/functions

function getName() {
    return 'Alex Wong de Freitas';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
