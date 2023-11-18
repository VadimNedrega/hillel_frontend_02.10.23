// ********** Strict mode **********
"use strict";

class Hamburger{
    static SIZE = {
        SMALL: {
            PRICE: 50,
            CALORIES: 20
        },
        LARGE: {
            PRICE: 100,
            CALORIES: 40
        }
    }

    static TOPPING = {
        CHEESE: {
            PRICE: 10,
            CALORIES: 20
        },
        SALAD: {
            PRICE: 20,
            CALORIES: 5
        },
        POTATO: {
            PRICE: 15,
            CALORIES: 10
        }
    }

    static SUPPLEMENT = {
        SEASONING: {
            PRICE: 15,
            CALORIES: 0
        },
        MAYO: {
            PRICE: 20,
            CALORIES: 5
        }
    }

    constructor(size, topping) {
        this.size = size;
        this.topping = topping;
        this.allTogether = [size, topping];
    }

    addSupplement = (supplement) => {
        this.allTogether.push(supplement);
        return this;
    }

    calculation = () =>  {
        let total = {
            PRICE: this.size.PRICE + this.topping.PRICE,
            CALORIES: this.size.CALORIES + this.topping.CALORIES
        };

        this.allTogether.slice(2).forEach(supplement => {
            total.PRICE += supplement.PRICE;
            total.CALORIES += supplement.CALORIES;
        });

        return total;
    }

    calculatePrice = () => this.calculation().PRICE;
    calculateCalories = () => this.calculation().CALORIES;
}

// маленький гамбургер з начинкою з сиру
const hamburger = new Hamburger(Hamburger.SIZE.SMALL, Hamburger.TOPPING.CHEESE);

// добавка з майонезу
hamburger.addSupplement(Hamburger.SUPPLEMENT.MAYO);

// запитаємо скільки там калорій
console.log(`Кількість калорій - ${hamburger.calculateCalories()}`);

// скільки коштує
console.log(`Price - ${hamburger.calculatePrice()} тугриків`);

// я тут передумав і вирішив додати ще приправу
hamburger.addSupplement(Hamburger.SUPPLEMENT.SEASONING);

// А скільки тепер коштує?
console.log(`Price with sauce: - ${hamburger.calculatePrice()} тугриків`);

// великий супер майонезний гамбургер
const superMayoHamburger = new Hamburger(Hamburger.SIZE.SMALL, Hamburger.TOPPING.SALAD);
superMayoHamburger.addSupplement(Hamburger.SUPPLEMENT.MAYO)
    .addSupplement(Hamburger.SUPPLEMENT.SEASONING)
    .addSupplement(Hamburger.SUPPLEMENT.MAYO)
    .addSupplement(Hamburger.SUPPLEMENT.MAYO)
    .addSupplement(Hamburger.SUPPLEMENT.MAYO)
    .addSupplement(Hamburger.SUPPLEMENT.MAYO)
    .addSupplement(Hamburger.SUPPLEMENT.MAYO)
    .addSupplement(Hamburger.SUPPLEMENT.MAYO)
    .addSupplement(Hamburger.SUPPLEMENT.MAYO);

// скільки коштує
console.log(`Price - ${superMayoHamburger.calculatePrice()} тугриків`);

// запитаємо скільки там калорій
console.log(`Кількість калорій - ${superMayoHamburger.calculateCalories()}`);

