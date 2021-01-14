function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma(2)(3));

// Utiliza de Closure. Para utilizar uma função dentro de uma função. 
// Memoriza um valor para usar na função.

