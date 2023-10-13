// ********** Strict mode **********
"use strict";

alert("Welcome to calculator!");

const operation = prompt("What action you want to do? Sum, Diff, Mult, Div, Sqrt, Sin, Cos");
const goodBy = "Good by, see you later.";
const goodByBadDigit = "This is bad digit, good by";
let result;
let number1;
let number2;

switch (operation) {
    case "Sum":
    case "Diff":
    case "Mult":
    case "Div": {
        number1 = parseFloat(prompt("Enter first number"));
        let output;

        isNaN(number1) ? output = goodByBadDigit : number2 = parseFloat(prompt("Enter second number"));
        isNaN(number2) ? output = goodByBadDigit : (result =
            operation === "Sum" ? number1 + number2 :
                operation === "Diff" ? number1 - number2 :
                    operation === "Mult" ? number1 * number2 : number1 / number2)
            ? (output = `${operation} of ${number1} and ${number2} is ${result}`)
            : (output = `${operation} of ${number1} and ${number2} is ${result}`);

        alert(output);

        break;
    }
    case "Sqrt":
    case "Sin":
    case "Cos": {
        number1 = parseFloat(prompt("Enter number"));
        let output;

        isNaN(number1) ? output = goodByBadDigit : (result =
                operation === "Sqrt" ? result = Math.sqrt(number1) :
                    operation === "Sin" ? result = Math.sin(number1) : result = Math.cos(number1))
            ? (output = `${operation} of ${number1} is ${result}`)
            : (output = `${operation} of ${number1} is ${result}`);

        alert(output);

        break;
    }
    default: {
        alert(goodBy);
    }
}