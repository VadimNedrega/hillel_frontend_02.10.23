// ********** Strict mode **********
"use strict";

alert("Hello, dear user! Here you can calculate seconds amount in hours. Please follow the instruction:)")

const hoursAmount = parseFloat(prompt("Please put hours value:"));
const secondsAmount = hoursAmount * 3600;

alert("We have: " + secondsAmount + " seconds in " + hoursAmount + " hour(s)");