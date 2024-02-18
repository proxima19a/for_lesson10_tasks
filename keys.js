//String | Symbol
const user={
    name: 'Maxim',
    10: '1234',
    undefined: undefined,
    [false]: false,
};

console.log(Object.keys(user)); // ["10" "name" "undefined" "false"] ключ становится string

const id=Symbol('id');
const id2=Symbol('id2');
const userr={
    [id]: 1,
    name: 'Maxim',
}

console.log(userr); // {name: "Maxim", Symbol(id): 1}
console.log(userr[id]); // 1

// in

console.log('name' in userr); // true
console.log('programm' in userr); // false
console.log(id in userr); // true
console.log(id2 in userr); // false

