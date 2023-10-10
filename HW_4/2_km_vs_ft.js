// ********** Strict mode **********
"use strict";

alert("This page can show which length from two is bigger. Please follow the instruction:");

const km = parseFloat(prompt("Please put first length in kms"));
const ft = parseFloat(prompt("Please put second length in fts"));

if (isNaN(km) || isNaN(ft)){
    alert("Something went wrong. Please refresh the page");
} else {
    const biggerLengthAsString = (km > ft/1000*0.305) ? km + "km" : ft + "ft";
    const smallerLengthAsString = (km > ft/1000*0.305) ? ft + "ft" : km + "km";

    alert("Length " + biggerLengthAsString + " is bigger than " + smallerLengthAsString);
}