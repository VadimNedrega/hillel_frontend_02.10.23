// ********** Strict mode **********
"use strict";

function removeElement(array, item) {
    const arrayItem = Array.isArray(item) ? item : null;

    if (arrayItem){
        for (item of array) {
            if (arraysAreEqual(arrayItem, item)) {
                array.splice(array.indexOf(item), 1);
            }
        }
    }

    while (array.includes(item)){
        array.splice(array.indexOf(item), 1);
    }
}

const array = [[1, 2, 3], 1, 2, 3, 4, 5, 1, 1, "string", [1, 2, 3], [1, 2, "3"]];

removeElement(array, [1, 2, 3]);
removeElement(array, [1, 2, "3"]);
removeElement(array, "string");
removeElement(array, 1);

console.log(array);