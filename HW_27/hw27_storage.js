// ********** Strict mode **********
"use strict";

function saveOrderToLocalStorage(order) {
    localStorage.setItem(`${order["Назва продукту: "]}`, JSON.stringify(order));
}

function getOrdersMap(){
    const dataMap = new Map();
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        dataMap.set(key, value);
    }
    return dataMap;
}
