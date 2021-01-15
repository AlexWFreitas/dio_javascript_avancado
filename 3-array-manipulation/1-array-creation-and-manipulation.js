const forma1 = [1 , 2];

console.log(forma1);

const forma2 = new Array(1, 2);

console.log(forma2);

const forma3 = new Array(1); // Cria array com 1 elemento vazio.

console.log(forma3);

const persons = Array.of('John', 'Chris', 'Jennifer');

console.log(persons);

const numbersAndStrings = Array.of(1, 2, 'John', 'Torque');

console.log(numbersAndStrings);




const arrWith3Positions = Array(3);  // Cria array com 3 posições vazias.

console.log(arrWith3Positions);

const arrayExample1 = Array(3, 5, 'Alo');

console.log(arrayExample1);



// Array.from = Retorna um array a partir de algo.

const divs = document.querySelectorAll('div'); // Retorna um NodeList de todos os divs de uma página.
const arr = Array.from(divs); // Recebe o NodeList e cria um Array com ele.


//Array.push -> Adiciona um elemento no final do array e retorna a quantidade de elementos no array.

const frutas =['melancia', 'banana'];

console.log(frutas.push('laranja'));
console.log(frutas);

// Array.pop -> Remove um elemento no final do array. E retorna o item removido.

console.log(frutas.pop);
console.log(frutas);

// Array.unshift -> Adiciona um elemento no ínicio do array e retorna o tamanho do array.
// Array.shift -> Remove o primeiro elemento e retorna o item removido.


console.log(frutas.unshift('maca'));
console.log(frutas);
console.log(frutas.shift());
console.log(frutas);


// Array.concat - Pega os valores e cria um novo array com os valores de dois arrays.
// Não altera os arrays originais.

const frutas = ['melancia', 'banana'];
const salgados = ['coxinha', 'pastel', 'kibe'];
const alimentos = frutas.concat(salgados);

console.log(alimentos);

// Array.slice - Retorna um novo array fatiando o array de acordo com o ínicio e fim.


const arr = [1, 2, 3 ,4 ,5];

const slice0a2 = arr.slice(0,2); 

// Começa no index 0 e 
// o último indice onde ele vai pegar é o anterior ao valor do segundo parametro.

console.log(slice0a2);

console.log(arr.slice(-1)); // Começa no último.

console.log(arr.slice(-3)); // Começa no antepenultimo.



// Array.splice => Altera um array adicionando novos elementos enquanto remove elementos antigos

// Mexe no array original / referência.

const arr = [1, 2, 3, 4, 5];

arr.splice(2); 
// Remove items a partir do index 2.
// Retorna items removidos.
// [3, 4, 5]

console.log(arr);
// [1, 2]

arr.splice(0, 0, 'first'); 
// Remove segundo parâmetro elementos na posição do primeiro parâmetro, 
// Adiciona 'first na posição do primeiro parâmetro.
// Default do segundo parâmetro é todos os elementos a partir do primeiro parâmetro.
// Retorno do comando acima.
// []

console.log(arr);
// ['first', 1, 2]



