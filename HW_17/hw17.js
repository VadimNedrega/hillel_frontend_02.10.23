// ********** Strict mode **********
"use strict";
const errorVisitsInfo = "ERROR! Amount of visits more than";

class Student {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.evaluations = [];
        this.visits = new Array (25);

        this.present = () => {
            const emptyIndex = this.visits.findIndex(el => el === undefined);
            emptyIndex !== -1 ? this.visits[emptyIndex] = true : console.log(`${errorVisitsInfo} ${this.visits.length}`);
        };

        this.absent = () => {
            const emptyIndex = this.visits.findIndex(el => el === undefined);
            emptyIndex !== -1 ? this.visits[emptyIndex] = false : console.log(`${errorVisitsInfo} ${this.visits.length}`);
        };
    }

    getAge = () => new Date().getFullYear() - this.birthYear;

    getAverageEvaluation = () =>
        this.evaluations.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / this.evaluations.length;

    estimate = (evaluation) => this.evaluations.push(evaluation);

    visitResult = () => this.visits.filter(el => el === true).length / this.visits.filter(el => el === true || el === false).length;

    summary = () => {
        const visitsResult = this.visitResult();
        const evaluationResult = this.getAverageEvaluation();

        if (evaluationResult > 90 && visitsResult > 0.9){
            return  "Молодець!";
        } else if (evaluationResult > 90 || visitsResult > 0.9){
            return "Добре, але можна краще";
        } else return "Редиска!";
    }
}

console.log("STUDENT 1:")
const student1 = new Student("Olga", "Botan", 2005);
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.estimate(95);
student1.estimate(91);
student1.estimate(96);
student1.estimate(88);
student1.estimate(85);

console.log(`student name: ${student1.name} ${student1.surname}`);
console.log(`student age: ${student1.getAge()}`);
console.log(`average evaluation: ${student1.getAverageEvaluation()}`);
console.log(`visits level result: ${student1.visitResult() * 100}%`);
console.log(`Остаточний вирок - ${student1.summary()}`);

console.log("STUDENT 2:")
const student2 = new Student("Ivan", "Polu-Botan", 2004);
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.estimate(95);
student2.estimate(96);
student2.estimate(97);
student2.estimate(100);
student2.estimate(100);

console.log(`student name: ${student2.name} ${student2.surname}`);
console.log(`student age: ${student2.getAge()}`);
console.log(`average evaluation: ${student2.getAverageEvaluation()}`);
console.log(`visits level result: ${student2.visitResult() * 100}%`);
console.log(`Остаточний вирок - ${student2.summary()}`);

console.log("STUDENT 3:")
const student3 = new Student("Masha", "Razgulyasha", 1993);
student3.present();
student3.absent();
student3.absent();
student3.estimate(80);
student3.estimate(70);
student3.estimate(60);

console.log(`student name: ${student3.name} ${student3.surname}`);
console.log(`student age: ${student3.getAge()}`);
console.log(`average evaluation: ${student3.getAverageEvaluation()}`);
console.log(`visits level result: ${student3.visitResult() * 100}%`);
console.log(`Остаточний вирок - ${student3.summary()}`);