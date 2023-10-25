// ********** Strict mode **********
"use strict";

alert("Welcome to calculator!");

const functions = ["Sum", "Diff", "Mult", "Div", "Sqrt", "Sin", "Cos", "History"]
const startQuestion = "What action you want to do? "
const startQuestionWithoutHistory = startQuestion + `${functions.slice(0, functions.length -1).join(", ")}`;
const startQuestionIncludeHistory = startQuestion + `${functions.join(", ")}`;
const goodBy = "Good by, see you later.";
const badDigit = "This is bad digit. Please enter correct digit";
const enterNumber = "Enter number";
const enterFirstNumber = "Enter first number";
const enterSecondNumber = "Enter second number";
const continueWork = "Do you want continue work with me?";
const unpredictableMagic = "There is some magic in program. You shouldn't have seen this message 😨. Please check program carefully";

let operation = prompt(startQuestionWithoutHistory);
let result;
let number1;
let number2;
let output;
let operationHistory = [];

while (operation !== null) {
    if (functions.includes(operation)) {
        if (operation === "Sum" || operation === "Diff" || operation === "Mult" || operation === "Div") {
            number1 = prompt(enterFirstNumber);

            while (isNaN(parseFloat(number1)) && number1 !== 0 && number1 !== null) {
                alert(badDigit);
                number1 = prompt(enterFirstNumber);
            }

            if (number1 === null) {
                operation = null;
                break;
            } else number1 = parseFloat(number1);

            number2 = prompt(enterSecondNumber);

            while (isNaN(parseFloat(number2)) && number2 !== 0 && number2 !== null) {
                alert(badDigit);
                number2 = prompt(enterSecondNumber);
            }

            if (number2 === null) {
                operation = null;
                break;
            } else number2 = parseFloat(number2);

            let operator;

            switch (operation) {
                case "Sum":
                    result = number1 + number2;
                    operator = "+";
                    break;
                case "Diff":
                    result = number1 - number2;
                    operator = "-";
                    break;
                case "Mult":
                    result = number1 * number2;
                    operator = "*";
                    break;
                case "Div":
                    number1 === number2 && number2 === 0 ? result = 0 : result = number1 / number2;
                    operator = "/";
                    break;
                default:
                    alert(goodBy);
                    break;
            }

            if (result || result === 0) {
                output = `${operation}: ${number1} ${operator} ${number2} = ${result}`;
                operationHistory.push(output);
                alert(output);
            } else console.log(unpredictableMagic);

            if (output || output === 0) {
                operation = confirm(continueWork) ? operation = prompt(startQuestionIncludeHistory) : operation = null;
            } else console.log(unpredictableMagic);

        } else if (operation === "Sqrt" || operation === "Sin" || operation === "Cos") {
            number1 = prompt(enterNumber);

            while (isNaN(parseFloat(number1)) && number1 !== 0 && number1 !== null) {
                alert(badDigit);
                number1 = prompt(enterNumber);
            }

            if (number1 === null) {
                operation = null;
                break;
            } else number1 = parseFloat(number1);

            switch (operation) {
                case "Sqrt":
                    while (isNaN(number1) || number1 < 0) {
                        number1 < 0 ? alert("Digit must be positive. Please enter correct digit") : alert(badDigit);
                        number1 = parseFloat(prompt(enterNumber));
                    }
                    result = Math.sqrt(number1);
                    break;
                case "Sin":
                    result = Math.sin(number1);
                    break;
                case "Cos":
                    result = Math.cos(number1);
                    break;
                default:
                    alert(goodBy);
                    break;
            }

            if (result || result === 0) {
                output = `${operation} of ${number1} = ${result}`;
                operationHistory.push(output);
                alert(output);
            } else console.log(unpredictableMagic);

            if (output && output !== 0) {
                operation = confirm(continueWork) ? operation = prompt(startQuestionIncludeHistory) : operation = null;
            } else console.log(unpredictableMagic);
        } else if (operation === "History"){
            alert("Your operation: \n\n" + operationHistory.join("\n"));
            operation = confirm(continueWork) ? operation = prompt(startQuestionIncludeHistory) : operation = null;
        }
    } else {
        alert("I don't recognize your operation. Please choose correct operation like: Sum, Diff, Mult, Div, Sqrt, Sin or Cos");
        operation = prompt(startQuestion);
    }
}

alert(goodBy);