// ********** Strict mode **********
"use strict";

alert("This page can show whether the number A is a divisor of the number B. Please follow the instruction:");

const number1 = parseInt(prompt("Please put number A"));
const number2 = parseInt(prompt("Please put number B"));

if (isNaN(number1) || isNaN(number2)) {
    alert("Something went wrong. Please refresh the page");
} else {
    const isNumber1DivisorNumber2AsString = number2 % number1 === 0
        ? "Number " + number1 + " is divisor number " + number2
        : "Number " + number1 + " is not divisor number " + number2;
    const isNumber2DivisorNumber1AsString = number1 % number2 === 0
        ? "Number " + number2 + " is divisor number " + number1
        : "Number " + number2 + " is not divisor number " + number1;

    alert(isNumber1DivisorNumber2AsString + "\n" + isNumber2DivisorNumber1AsString);
}
