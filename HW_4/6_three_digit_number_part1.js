// ********** Strict mode **********
"use strict";

alert("This page can show some interesting things with three digit number. Please follow the instruction:");

const number = parseInt(prompt("Please put three digit number"));

if (isNaN(number) || number > 999 || number < 99) {
    alert("Something went wrong. Please refresh the page");
} else {
    const firstDigit = (number / 100) | 0;
    console.log(firstDigit);
    const secondDigit = ((number / 10) | 0) % 10;
    console.log(secondDigit);
    const thirdDigit = number % 10;
    console.log(thirdDigit);

    const sumOfDigits = firstDigit + secondDigit + thirdDigit;
    const isDivisorBy5 = sumOfDigits % 5 === 0;
    const multiplicationResult = firstDigit * secondDigit * thirdDigit;
    const isMultiplyDigitsMoreThan100 = multiplicationResult > 100;

    const firstResponse = "Sum of digits = " + sumOfDigits;
    const secondResponse = isDivisorBy5 ? sumOfDigits + " can be divided by 5" : sumOfDigits + " can not be divided by 5";
    const thirdResponse = isMultiplyDigitsMoreThan100
        ? "Multiplication of digits " + firstDigit + " " + secondDigit + " " + thirdDigit + " = " + multiplicationResult + " and is bigger than 100"
        : "Multiplication of digits " + firstDigit + " " + secondDigit + " " + thirdDigit + " = " + multiplicationResult + " and is smaller than 100";

    alert(firstResponse + "\n" + secondResponse + "\n" + thirdResponse);
}
