// ********** Strict mode **********
"use strict";

class SuperMath{
    znakArray = ["/", "%", "+", "-", "*"];

    check(obj) {
        const confirmAction = confirm(`Do you want to do action "${obj.znak}" with ${obj.X} and ${obj.Y}?`);

        if (confirmAction){
            const result = this.calculate(obj);
            alert(`Result: ${result}`);
        } else {
            const newObj = this.input();
            const result =  this.calculate(newObj);
            result ? alert(`Result: ${result}`) : alert("can't calculate data");
        }
    }

    calculate(obj){
        switch (obj.znak){
            case "/": return parseFloat(obj.X / obj.Y);
            case "%": return parseFloat(obj.X % obj.Y);
            case "+": return parseFloat(obj.X + obj.Y);
            case "-": return parseFloat(obj.X - obj.Y);
            case "*": return parseFloat(obj.X * obj.Y);
            default: alert("can't calculate data");
        }
    }

    input(){
        let znak = prompt("Please enter znak value - /, %, +, -, or *");

        while (!this.znakArray.includes(znak)){
            znak = prompt("Please enter znak value - /, %, +, -, or *");
        }

        const x = prompt("Please enter X value");
        const y = prompt("Please enter Y value");

        return new ObjectForCheck(znak, x, y);
    }
}

class ObjectForCheck {
    constructor(znak, X, Y) {
        this.znak = znak;
        this.X = parseFloat(X);
        this.Y = parseFloat(Y);
    }
}

const superMath = new SuperMath();
superMath.check(new ObjectForCheck("+", 12, 4))




