// ********** Strict mode **********
"use strict";

alert("Hello, dear user! This is primitive calculator. Please follow the instruction:)")

const firstNumber = parseFloat(prompt("Please put the first number"));
const secondNumber = parseFloat(prompt("Please put the second number"));

function sum(firstNumber, secondNumber){
    const result = firstNumber + secondNumber;
    return  ("Sum: " + firstNumber + " + " + secondNumber + " = " + result + "\n");
}

function diff(firstNumber, secondNumber){
    const result = firstNumber - secondNumber;
    return("Diff: " + firstNumber + " - " + secondNumber + " = " + result + "\n");
}

function multiple(firstNumber, secondNumber){
    const result = firstNumber * secondNumber;
    return("Mult: " + firstNumber + " * " + secondNumber + " = " + result + "\n");
}

function divine(firstNumber, secondNumber){
    const result = firstNumber / secondNumber;
    return("Div: " + firstNumber + " / " + secondNumber + " = " + result);
}

alert(
    sum(firstNumber, secondNumber) + diff(firstNumber, secondNumber) +
    multiple(firstNumber, secondNumber) + divine(firstNumber, secondNumber)
);