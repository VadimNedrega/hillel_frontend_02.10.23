// ********** Strict mode **********
"use strict";

alert("This page can show is the last digit of number is even number. Please follow the instruction:");

const number = parseInt(prompt("Please put number"));

if (isNaN(number)) {
    alert("Something went wrong. Please refresh the page");
} else {
    const lastDigit = number % 10;

    alert(
        lastDigit % 2 === 0
        ? "Last digit " + lastDigit + " from number " + number + " is even number"
        : "Last digit " + lastDigit + " from number " + number + " is not even number"
    );
}
