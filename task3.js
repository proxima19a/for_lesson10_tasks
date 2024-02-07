const handleObject=(obj, key, action) => {
    switch (action) {
  case 'get':
    return obj[key];
    break;
  case 'add':
    obj[key]="";
    return obj;
    break;
    case 'delete':
        delete obj[key];
        return obj;
  default:
   return obj;
    break;
}
}

const student = {
   name: 'Maxim',
   programmingLanguage: 'JavaScript',
}
 
const result = handleObject(student, 'programmingLanguage', 'delete');
console.log('result', result); // { name: 'Maxim' }