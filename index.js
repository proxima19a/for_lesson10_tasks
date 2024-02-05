const developer = {
    // key: value
    name: 'Maxim',
    job: 'Front-End developer',
    experience: 24,
    jobAllInfo: {
        type: 'Front-End',
        framework: 'ReactJS',
    }
};

console.log(developer);

// 1. способ получения значения по ключу через "."

console.log(developer.name); // Maxim
console.log(developer.jobAllInfo); // jobAllInfo: { type: 'Front-End', framework: 'ReactJS',}

//2. . способ получения через "['']"
console.log(developer['name']); // Maxim


const key='name';
console.log(developer.key); // undefined
console.log(developer[key]); //  Maxim

console.log(developer.jobAllInfo.type); //Front-End
console.log(developer['jobAllInfo']['framework']); // ReactJS
