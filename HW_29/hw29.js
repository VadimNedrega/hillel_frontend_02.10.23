// ********** Strict mode **********
"use strict";

const emailPattern = /^[a-zA-Z\d._%+-]+@[a-zA-Z\d]+\.[a-zA-Z]{2,}$/;

fetch("invalid-email.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error due to fetch file");
        }

        return response.json();
    })
    .then(data => {
        const validEmails = [];
        data.map(email => {
            const isValid = validateEmail(email, emailPattern);
            if (isValid) validEmails.push(email);
        });

        if (validEmails.length !== 0) {
            console.log("Check the pattern. Something went wrong. See array of valid emails:", validEmails);
        } else {
            console.log("All invalid emails were being filtered by validation function");
        }
    })
    .catch(error => {
        console.error("General error", error);
    });

function validateEmail(email, pattern){
    return pattern.test(email);
}