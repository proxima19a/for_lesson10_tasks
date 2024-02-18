const developerInfo={
    age: 25,
    experience: 3,
    name: 'Maxim',
};

const developerExtraInfo= {
    name: 'Igor',
    height: 180,
    isJunior: false,
};

// ...  объединение
// const array=[
//     ...array1,
//     ...array2
// ]
 
// 1. Новый способ обЪединения обЪектов "..." - создает новый обЪект!
const developer={
    ...developerInfo,
    ...developerExtraInfo,
    name: 'Alex',
}; 
console.log(developer); //{age: 25, experience: 3, height: 180, isJunior: false, name: 'Alex',} используется последнее значение name

// 2. Старый способ обЪединения обЪектов Object.assign - копирует в целевой объект все свойства из других объектов
const developer2=Object.assign(developerInfo, developerExtraInfo);
console.log(developer2);
