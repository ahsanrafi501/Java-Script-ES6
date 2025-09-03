class Player {
    constructor(name){
        this.yourName = name;
        console.log("Constructor is running");
        console.log(`My name is ${this.yourName}`);
    }

    getName(name){
        const yourName = name;
        console.log(`My name is ${yourName}`);
    }
}

const player1 = new Player("Ahsan");
player1.getName("Rafi");
