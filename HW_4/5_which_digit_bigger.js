// ********** Strict mode **********
"use strict";

alert("This page can show which digit of two digit number is bigger. Please follow the instruction:");

const number = parseInt(prompt("Please put two digit number"));

if (isNaN(number) || number > 99 || number < 9) {
    alert("Something went wrong. Please refresh the page");
} else {
    const firstDigit = (number - number % 10)/10;
    const secondDigit  = number % 10;

    alert(
        firstDigit > secondDigit
            ? "Digit " + firstDigit + " is bigger than digit " + secondDigit
            : firstDigit < secondDigit
            ? "Digit " + secondDigit + " is bigger than digit " + firstDigit
            : "Digits are equals"
    );
}
