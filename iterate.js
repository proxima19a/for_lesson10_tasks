const goodInfo={
    id: 1,
    price: 80,
    currency: '$',
    name: 'shoes',
}
console.log(goodInfo);

// //for in
// for (const key in goodInfo) {
//     console.log('key', key);
//     const value=goodInfo[key];
//     console.log('value', value);
// }

// Object.keys

const keys=Object.keys(goodInfo);
console.log('keys', keys);

//Object.values
const values=Object.values(goodInfo);
console.log('values', values);

// Object.entries
const entries=Object.entries(goodInfo);
console.log(entries); // [0: ["id", 1], 1: ["price", 80], 2: ["currency", "$"], 3: ["name", "shoes"] ]
console.log(entries[0]); // ["id", 1]
