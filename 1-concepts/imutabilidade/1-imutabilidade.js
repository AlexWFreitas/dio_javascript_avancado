// Em Linguagens funcionais a variável nunca muda.
// Quando você quer mudar a variável, você cria uma nova.

// Objetos nunca são atualizados, eles são copiados e depois você altera.
// Arrays, etc.

const user = {
    name: 'Alex', 
    lastName: 'Wong de Freitas'
};

function getUserWithFullName(user) {
    return  {
        ...user, // Spread Operator, cada propriedade recebida do user, 
                 // é colocada dentro do objeto retornado - Surgiu no ES6 / 2018
        fullName: `${user.name} ${user.lastName}` 
    }
}


// Toda vez que um objeto ou array é passado pra uma função, ele é passado por referência.
// Ao usar o Spread Operator, ele cria um novo objeto ou array.

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
console.log(user);
