// ********** Strict mode **********
"use strict";

const showAlert = "alert";
const showPrompt = "prompt";
const showConfirm = "confirm";
const functions = ["Sum", "Diff", "Mult", "Div", "Sqrt", "Sin", "Cos", "History"]
const functionsAsString = `${functions.join(", ")}`;
const functionsWithoutHistoryAsString = `${functions.filter((operation) => operation !== "History").join(", ")}`;
const startQuestion = "What action you want to do? "
const startQuestionWithoutHistory = startQuestion + functionsWithoutHistoryAsString;
const startQuestionIncludeHistory = startQuestion + functionsAsString;
const goodBy = "Good by, see you later.";
const badDigit = "This is bad digit. Please enter correct digit";
const enterNumber = "Enter number";
const enterFirstNumber = "Enter first number";
const enterSecondNumber = "Enter second number";
const continueWork = "Do you want continue work with me?";
const unpredictableMagic = "There is some magic in program. You shouldn't have seen this message 😨. Please check program carefully";

showNotification(showAlert, "Welcome to calculator!");
let operation = showNotification(showPrompt, startQuestionWithoutHistory);
let result;
let number1;
let number2;
let output;
let operationHistory = [];

function getSum(number1, number2){
    return number1 + number2;
}

function getDiff(number1, number2){
    return number1 - number2;
}

function getMult(number1, number2){
    return number1 * number2;
}

function getDiv(number1, number2){
    return number1 / number2;
}

function checkIfArithmeticOperation(operation){
    return operation === "Sum" || operation === "Diff" || operation === "Mult" || operation === "Div"
}

function checkIfFunctionOperation(operation){
    return operation === "Sqrt" || operation === "Sin" || operation === "Cos"
}

function showNotification(functionName, notification){
    switch (functionName) {
        case showAlert : return alert(notification);
        case showPrompt : return prompt(notification);
        case showConfirm : return confirm(notification);
    }

    return "";
}

function resetOperationIfNumberIsNull(number){
    if (number === null) operation = null;
}

function askNumberWhileInvalid(number, notification){
    while (isNaN(parseFloat(number)) && number !== 0 && number !== null) {
        showNotification(showAlert, badDigit);
        number = showNotification(showPrompt, notification);
    }

    return number;
}

function getValidNumber(number, notification){
    number = askNumberWhileInvalid(number, notification);
    resetOperationIfNumberIsNull(number);

    return parseFloat(number);
}

function getOperator(operation){
    switch (operation){
        case "Sum": return "+";
        case "Diff": return "-";
        case "Mult": return "*";
        case "Div": return "/";
    }
}

function getOperationResult(operation){
    switch (operation) {
        case "Sum": return  result = getSum(number1, number2);
        case "Diff": return  result = getDiff(number1, number2);
        case "Mult": return result = getMult(number1, number2);
        case "Div": return  number1 === number2 && number2 === 0 ? result = 0 : result = getDiv(number1, number2);
        case "Sin": return result = Math.sin(number1);
        case "Cos": return result = Math.cos(number1);
        case "Sqrt":
            while (isNaN(number1) || number1 < 0) {
                number1 < 0 ? alert("Digit must be positive. Please enter correct digit") : showNotification(showAlert, badDigit);
                number1 = parseFloat(showNotification(showPrompt, enterNumber));
            }
            return result = Math.sqrt(number1);
        default: showNotification(showAlert, goodBy);
    }
}

function checkIfValidOrZero(result){
    return result || result === 0;
}

function showNotificationAfterHistory(){
    operation =  showNotification(showConfirm, continueWork) ? operation = showNotification(showPrompt, startQuestionIncludeHistory) : operation = null;
}

function pushOutputToHistory(isArithmeticOperation){
    isArithmeticOperation
        ? output = `${operation}: ${number1} ${getOperator(operation)} ${number2} = ${result}`
        : output = `${operation} of ${number1} = ${result}`;

    operationHistory.push(output);
}

function showOperationResult(isArithmeticOperation){
    if (checkIfValidOrZero(result)) {
        pushOutputToHistory(isArithmeticOperation);
        showNotification(showAlert, output);
    } else console.log(unpredictableMagic);
}

while (operation !== null) {
    if (functions.includes(operation)) {
        if (checkIfArithmeticOperation(operation)) {
            number1 = getValidNumber(showNotification(showPrompt, enterFirstNumber), enterFirstNumber);
            if (operation === null) break;

            number2 = getValidNumber(showNotification(showPrompt, enterSecondNumber), enterSecondNumber)
            if (operation === null) break;

            result = getOperationResult(operation);

            showOperationResult(true);

            checkIfValidOrZero(output) ? showNotificationAfterHistory() : console.log(unpredictableMagic);
        } else if (checkIfFunctionOperation(operation)) {
            number1 = getValidNumber(showNotification(showPrompt, enterNumber), enterNumber)
            if (operation === null) break;

            result = getOperationResult(operation);

            showOperationResult(false);

            checkIfValidOrZero(output) ? showNotificationAfterHistory() : console.log(unpredictableMagic);
        } else if (operation === "History") {
            operationHistory.length !== 0
                ? showNotification(showAlert, "Your operation(s): \n\n" + operationHistory.join("\n"))
                : showNotification(showAlert, "You haven't done any operations yet");

            showNotificationAfterHistory();
        }
    } else {
        const wrongOperation = "I don't recognize your operation. Please choose correct operation like: ";

        if (operationHistory.length === 0){
            showNotification(showAlert, wrongOperation + functionsWithoutHistoryAsString);
            operation = showNotification(showPrompt, startQuestionWithoutHistory);
        } else {
            showNotification(showAlert, wrongOperation + functionsAsString);
            operation = showNotification(showPrompt, startQuestionIncludeHistory);
        }
    }
}

showNotification(showAlert, goodBy);