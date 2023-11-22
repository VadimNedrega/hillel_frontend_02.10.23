// ********** Strict mode **********
"use strict";

class MyLinkedDoubleWayList{
    constructor () {
        this.head = null;
        this.tail = null;
    }

    static object(value) {
        return {
            value: value,
            prev: null,
            next: null
        };
    }

    #currentSize = 0;

    add(value) {
        if (this.#currentSize < 0) {
            console.warn("LinkedList is broken!");
            return;
        }

        const newNode = MyLinkedDoubleWayList.object(value);

        if (value instanceof Object) {
            Object.assign(newNode, value);
        }

        if (this.#currentSize === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.#currentSize++;
    }

    size() {
        return this.#currentSize;
    }

    getHead(){
        return this.head;
    }

    search(value){
        let currentValue = this.head;

        while (currentValue){
            if(Array.isArray(value) && arraysAreEqual(currentValue.value, value)){
                return currentValue;
            }

            if (isValueObjectAndEqualsAnotherObject(currentValue, value)) {
                return currentValue;
            }

            if (currentValue.value === value){
                return currentValue;
            }

            currentValue = currentValue.next;
        }

        console.log("Element not found");
        return null;
    }

    remove(value){
        const target = this.search(value);

        if (!target) {
            console.log("Element not found");
            return;
        }

        if (target === this.head) {
            this.head = target.next;
        } else {
            target.prev.next = target.next;
        }

        if (target === this.tail) {
            this.tail = target.prev;
        } else {
            target.next.prev = target.prev;
        }

        target.next = null;
        target.prev = null;
        this.#currentSize--;
    }

    toArray() {
        const result = [];
        let currentValue = this.head;

        while (currentValue) {
            result.push(currentValue.value);
            currentValue = currentValue.next;
        }

        return result;
    }
}

const myLinkedList = new MyLinkedDoubleWayList();
myLinkedList.add("first");
myLinkedList.add(2);
myLinkedList.add({name: "third"});
myLinkedList.add([1, 2, "123"]);

console.log(`myLinkedList:`);
console.log(myLinkedList);

console.log(`myLinkedList toArray:`);
console.log(myLinkedList.toArray());

console.log(`myLinkedList size:`);
console.log(myLinkedList.size());

console.log(`myLinkedList head:`);
console.log(myLinkedList.getHead());

console.log(`myLinkedList search:`);
console.log(myLinkedList.search([1, 2, "123"]));

console.log(`myLinkedList after removing:`);
myLinkedList.remove({name: "third"});
console.log(myLinkedList);

console.log(`myLinkedList toArray:`);
console.log(myLinkedList.toArray());

const myLinkedList2 = myLinkedList;
myLinkedList2.add({name: "newObject"});
console.log(`myLinkedList2 search:`);
console.log(myLinkedList2.search({name: "newObject"}));

console.log(`myLinkedList2 toArray:`);
console.log(myLinkedList2.toArray());

const myLinkedList3 = myLinkedList2;
myLinkedList2.remove("first");
myLinkedList2.remove(2);
myLinkedList2.remove([1, 2, "123"]);
myLinkedList2.remove({name: "newObject"});
console.log(`myLinkedList3 after removing entry must be empty. It is ${myLinkedList3.size() === 0}`);