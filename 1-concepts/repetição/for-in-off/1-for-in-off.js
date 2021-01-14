let arr = [3, 5, 7];
arr.foo = "hello";

// Lista propriedades do array. ( inclui o arr.foo )

for (let i in arr) {
    console.log(i);
}

// Lista valores do array.

for (let i of arr) {
    console.log(i);
}