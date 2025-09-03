const person = {
    name: "Armeen",
    age: 5,
    family:{
        name: "Dewan",
        // brother:{
        //     name: "Ahsan",
        //     occupation: "Software Engineer",
        // }
    }
}

console.log(person);
console.log(person.name);
console.log(person.family.name);
console.log(person.family.brother);
console.log(person.family.brother?.occupation);
console.log(person.family.brother?.bou);