// ********** Strict mode **********
"use strict";

function getSum() {
    let previousSum = 0;

    return (number) => previousSum += number;
}

const sum = getSum();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

