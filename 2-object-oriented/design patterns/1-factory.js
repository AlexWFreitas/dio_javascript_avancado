function Pessoa(customProperties) {
    return {
        name: 'Alex',
        lastName: 'Freitas',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age: 32});
console.log(p);