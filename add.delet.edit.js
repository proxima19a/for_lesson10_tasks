const student={
    id: 1,
    programmingLanguage: 'JavaScript',
    hasExperienceInReact: false,
};

// add
student.experience=6;
console.log(student); // {id: 1, programmingLanguage: 'JavaScript', hasExperienceInReact: false, experience: 6}

// delete
delete student.hasExperienceInReact;
console.log(student); // {id: 1, programmingLanguage: 'JavaScript', experience: 6}

// edit
student.experience=12;
console.log(student); // {id: 1, programmingLanguage: 'JavaScript', experience: 12}
