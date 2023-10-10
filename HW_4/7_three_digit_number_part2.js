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

    const allDigitsAreEquals = firstDigit === secondDigit && secondDigit === thirdDigit;
    const someDigitsAreEquals = (firstDigit === secondDigit && secondDigit !== thirdDigit)
        || (firstDigit !== secondDigit && secondDigit === thirdDigit)
        || (firstDigit === thirdDigit && secondDigit !== thirdDigit);

    const firstResponse = allDigitsAreEquals ? "All digits are equals" : "All digits are not equals";
    const secondResponse = someDigitsAreEquals ? "Number " + number + " has equals digits" : "Number " + number + " has not equals digits";

    allDigitsAreEquals ? alert(firstResponse) : alert(firstResponse + "\n" + secondResponse);
}
