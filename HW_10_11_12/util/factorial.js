// ********** Strict mode **********
"use strict";

let numb;

do {
    numb = parseInt(prompt("Enter the natural (positive) number to get factorial"));
} while (!Number.isInteger(numb) || numb < 0)

function factorialResult(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        const result = n * factorialResult(n - 1);
        n--;

        return result;
    }
}

alert(`factorial result of ${numb} = ` + factorialResult(numb));

