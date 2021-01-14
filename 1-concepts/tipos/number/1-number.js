const myNumber = 12.4032;

const numberAsString = myNumber.toString();
console.log(`Número transformado em string: ${numberAsString}`);
console.log(`Número transformado em string: ${typeof numberAsString}`);

const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`\nNúmero com duas casas decimais: ${fixedTwoDecimals}`);

console.log(`\nString parseada para float: ${parseFloat('14.22')}`);
console.log(`${typeof parseFloat("14.22")}`);

console.log(`\nString 14.22 parseada para int: ${parseInt('14.22')}`);

// Não existe float ou int, ambos são number.