// const numbers = [10, 20, 30];
// const [x, y, z] = numbers;

// console.log(x, y, z);


// const [a, , b] = numbers;
// console.log(a, b);


// const [x1, ...rest] = numbers;
// console.log(x1, ...rest);

// Object destructuring

const person = {
    name:"Ahsan",
    age:"22",
    country: 'Bangladesh',
};


const name1 = person.name;

const {name, age} = person;

console.log(name1);
console.log(name, age);

const {name:fullName, age:years} = person;
console.log(fullName, years);


const {city = "dhaka"} = person;
console.log(city);
console.log(person.city);


const user = {
    id:1,
    profile:{
        username: "Ahsan Habib",
        email: "habib23105341021@diu.edu.bd",
    },
}


const {profile:{username, email}} = user;
console.log(username, email);


function greet({profile:{username}}){
    console.log(`Hello Mr. ${username}. Nice to meet you.`);
}

greet(user);