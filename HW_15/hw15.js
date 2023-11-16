// ********** Strict mode **********
"use strict";

function Human(name, gender) {
    this.name = name;
    this.sex = gender;
}

function Flat() {
    this.residents = [];
    this.addResident = (human) => {
        if (!(human instanceof Human)) {
            console.log(`can't add resident, because value "${human}" is not a human`);
            return;
        }

        Object.assign({}, Human)
        this.residents.push(human);
    }
}

function House(maxFlatAmount) {
    this.maxFlatAmount = maxFlatAmount;
    this.flats = [];
    this.addFlat = (flat) => {
        if (!(flat instanceof Flat)) {
            console.log(`can't add flat, because value "${flat}" is not a flat`);
            return;
        }

        if (this.flats.length < maxFlatAmount){
            Object.assign({}, Human, Flat)
            this.flats.push(flat)
        } else console.log("too much flats in house");
    }
}

console.log("code relates Human:");
const human1 = new Human("Ivan", "male");
const human2 = new Human("Olga", "female");
console.log(human1);
console.log(human2);

console.log("code relates Flat:");
const flat1 = new Flat();
const flat2 = new Flat();

flat1.addResident(human1);
flat1.addResident(human2);
flat1.addResident(123);
console.log(flat1);

flat2.addResident(human1);
flat2.addResident(human2);
console.log(flat2);

console.log("code relates House:");
const house1 = new House(12);
house1.addFlat(flat1);
house1.addFlat(flat2);
house1.addFlat("something");
console.log(house1)

const house2 = new House(1);
house2.addFlat(flat1);
house2.addFlat(flat2);
console.log(house2);