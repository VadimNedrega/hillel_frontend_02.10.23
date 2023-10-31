// ********** Strict mode **********
"use strict";

const key = prompt('Enter some key');
const secret = prompt('Enter some secret');

function createHash(key, secret){
    const concatString = key.toString().concat(secret.toString()).toString();
    const hashSecretValues = [];

    for (const char of concatString){
        const encodedChar = String.fromCharCode(concatString.charCodeAt(concatString.indexOf(char)) + 397);
        hashSecretValues.push(encodedChar);
    }

    return hashSecretValues.toString().replaceAll(",", "");
}

const hash1 = createHash("KEY", "SECRET");
const hash2 = createHash("key".toUpperCase(), "secret".toUpperCase());

console.log(`hashes are equal: ${hash1 === hash2}`);

alert(`Encoded hash: ${createHash(key, secret)}`);


