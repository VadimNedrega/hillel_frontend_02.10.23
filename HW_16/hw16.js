// ********** Strict mode **********
"use strict";

class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getHumanInfo() {
        const output = `Human info: name - ${this.name}, age - ${this.age}`;
        console.log(output);

        return output.slice(12);
    }
}

class Car {
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
        this.owner = null;
    }

    setOwner = (human) => {
        if (!(human instanceof Human)) {
            console.log(`you can't set owner, because ${human} is not a human`);
            return;
        }

        if (human.age < 18) {
            console.log(`you can't set owner, because human age must be greater 18`);
            return;
        }

        this.owner = human;
    }

    showCarInfo = () => {
        const carOwner = this.owner ? `{${this.owner.getHumanInfo()}}` : "car doesn't have owner";
        console.log(
            `Car info: brand - ${this.brand}; model - ${this.model}; year - ${this.year}; number = ${this.number}; owner: ${carOwner}`
        );
    }
}

const human = new Human("Ivan", 51);
const human1 = new Human("Olga", 24);

const car = new Car("subaru", "legacy", 2019, "QW1231OP");
const car1 = new Car("lada", "kopeika", 1967, "AA7777RT");
const car2 = new Car("BTR", "1_1", 1938, "AAAAAAAAA");
car.setOwner(human);
car1.setOwner(human1);

car.showCarInfo()
car1.showCarInfo()
car2.showCarInfo()