// ********** Strict mode **********
"use strict";

alert("This page can show are digits mirroring with sixth digit number. Please follow the instruction:");

const number = parseInt(prompt("Please put sixth digit number"));

if (isNaN(number) || number > 999999 || number < 99999) {
    alert("Something went wrong. Please refresh the page");
} else {
    const stringNumberArray = number.toString().split("");
    const isNumberMirror = stringNumberArray.at(0) === stringNumberArray.at(5)
    && stringNumberArray.at(1) === stringNumberArray.at(4)
    && stringNumberArray.at(2) === stringNumberArray.at(3);

    alert(isNumberMirror ? "Number is mirror" : "Number is not mirror");
}
