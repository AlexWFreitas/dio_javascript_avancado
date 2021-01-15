function getName() {
    return 'Alex Wong de Freitas';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
