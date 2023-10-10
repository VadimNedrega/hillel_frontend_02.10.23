// ********** Strict mode **********
"use strict";

alert("This page can show which number from two is bigger. Please follow the instruction:");

const number1 = parseFloat(prompt("Please put first number"));
const number2 = parseFloat(prompt("Please put second number"));

if (isNaN(number1) || isNaN(number2)){
    alert("Something went wrong. Please refresh the page");
} else {
    const biggerNumber = (number1 > number2) ? number1 : number2;
    const smallerNumber = (number1 > number2) ? number2 : number1;

    alert("Number " + biggerNumber + " is bigger than " + smallerNumber);
}
