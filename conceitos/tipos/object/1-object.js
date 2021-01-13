let user = { 
    name: 'Guilherme'
};

// Alterando a propriedade de um objeto
//console.log(user);
user.name = 'Alex';
//console.log(user);
user['name'] = 'Henrique';

//console.log(user);
// Code below uses prop to replace with 'name'
// So user[prop] = user['name']
const prop = 'name';
user[prop] = 'Daniel';

//console.log(user);

function getProp(prop) {
    return user[prop];
}


// Criando uma propriedade
user.lastname = 'Wong de Freitas';
console.log(user);

// Deletando uma propriedade.
delete user.name;
console.log(user);

console.log(getProp('lastname'));

