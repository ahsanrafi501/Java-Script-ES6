class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating food`);
    }
}


class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }

    bark(){
        console.log(`${this.name} is barking`);
    }
}


const dog1 = new Dog('Tomi', 5, 'Deshi');
dog1.eat();
dog1.bark();