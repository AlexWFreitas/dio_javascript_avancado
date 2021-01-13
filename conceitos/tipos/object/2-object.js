const user = {
    name: 'Alex',
    lastname: 'Wong de Freitas'
};

// Recupera as chaves do objeto.
console.log('Propriedades do objeto user: ', Object.keys(user));

//  Valores do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// Array contendo arrays de chave e valor.
console.log('\nLista de propriedades e valores: ', Object.entries(user));

// Merge de propriedades de objetos.
// Não é recomendado usar essa forma porque altera o objeto original, faça do jeito abaixo.
Object.assign(user, {fullName: user.name + ' ' + user.lastname});
console.log('\nAdiciona a propriedade fullName no objeto user: ', user);

// Método recomendado: ( Cria um novo objeto ). Sem alterar o original.
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));

console.log(user);

// Previne todas as alterações em um objeto.
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changed';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj após as alterações:', newObj);

// Não é possível deletar, trocar ou adicionar valores a um objeto congelado.

// Seal permite apenas alteração de propriedades existentes em um objeto.
const person = { name: 'Alex' };
Object.seal(person);

person.name = 'Alex Wong';
delete person.name;
person.age = 32;

console.log('Objeto após as tentativas de alteração, criação e deleção', person);
