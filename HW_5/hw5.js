// ********** Strict mode **********
"use strict";

alert("Welcome to calculator!");

const operation = prompt("What action you want to do? Sum, Diff, Mult, Div, Sqrt, Sin, Cos");
const goodBy = "Good by, see you later.";
const goodByBadDigit = "This is bad digit, good by";
let result;
let number1;
let number2;

if (operation === "Sum" || operation === "Diff" || operation === "Mult" || operation === "Div") {
    number1 = parseFloat(prompt("Enter first number"));

    if (isNaN(number1)) {
        alert(goodByBadDigit)
    } else {
        number2 = parseFloat(prompt("Enter second number"));

        if (isNaN(number2)) {
            alert(goodByBadDigit)
        } else {
            if (operation === "Sum") {
                result = number1 + number2;
            } else if (operation === "Diff") {
                result = number1 - number2;
            } else if (operation === "Mult") {
                result = number1 * number2;
            } else {
                result = number1 / number2;
            }

            const output = `${operation} of ${number1} and ${number2} is ${result}`;
            alert(output);
        }
    }
} else if (operation === "Sqrt" || operation === "Sin" || operation === "Cos") {
    number1 = parseFloat(prompt("Enter number"));

    if (isNaN(number1)) {
        alert(goodByBadDigit);
    } else {
        if (operation === "Sqrt") {
            result = Math.sqrt(number1);
        } else if (operation === "Sin") {
            result = Math.sin(number1);
        } else {
            result = Math.cos(number1);
        }

        const output = `${operation} of ${number1} is ${result}`;
        alert(output);
    }
} else {
    alert(goodBy);
}