const users = ['Guilherme', 'Pedro', 'Jennifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
};

const persons = [
    {
        name: 'Guilherme',
        age: 25,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 18,
        gender: gender.MAN
    },
    {
        name: 'Maria',
        age: 22,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Items:', persons.length);

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons));

// Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`);
});

// Filtrar um array através de condicionais.
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\n Nova lista apenas com homens:', mens);

// Retornar um novo array contendo o array original e um código extra.
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao JavaScript';
    return person;
});

console.log('\nPessoas com a adição do course:', personsWithCourse);

// filter, map, reduce não alteram o objeto, eles retornam um novo array.

// Reduce, primeiro parâmetro é a variavel que retorna.
// O segundo parâmetro é o array.
// Priemiro parâmetro da função interna. O render.
// Segundo parâmetro da função interna. Valor inicial.
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

// Juntando as operações

const totalEvenAges = persons
                    .filter(person => person.age % 2 === 0)
                    .reduce((age, person) => {
                        age += person.age;
                        return age;
                    }, 0);

console.log('\nSoma de idades de pessoas que possuem idade par', totalEvenAges);