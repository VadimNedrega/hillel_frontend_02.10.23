function arraysAreEqual(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
        return false;
    }

    return arr1.every((value, index) => value === arr2[index]);
}

function objectsAreEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];

        const areObjects = typeof val1 === 'object' && typeof val2 === 'object';
        if ((areObjects && !objectsAreEqual(val1, val2)) || (!areObjects && val1 !== val2)) {
            return false;
        }
    }

    return true;
}

function isValueObjectAndEqualsAnotherObject(currentObj, targetObj) {
    return typeof targetObj === 'object' && (JSON.stringify(currentObj.value) === JSON.stringify(targetObj))
}