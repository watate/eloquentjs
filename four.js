// Your code here.
function arrayToList(arr1) {
    function buildList(arr2) {
        if (arr2.length === 1) {
            return {
                value: arr2.shift(),
                rest: null
            };
        } else {
            return {
                value: arr2.shift(),
                rest: buildList(arr2)
            }
        }
    }
    let temp = arr1.slice();
    return buildList(temp);
}

function listToArray(list) {
    let output = [];
    let temp = list;

    while (temp !== null) {
        output.push(temp.value);
        temp = temp.rest;
    }
    return output;
}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

function nth(list, index) {
    // arr = listToArray(list);
    // if (index > arr.length - 1) return undefined
    // else return arr[index];

    //Recursive version
    if (list === null) return undefined;
    else if (index === 0) return list.value;
    else return nth(list.rest, index - 1);
}

function deepEqual(a, b) {
    console.log(b);
    console.log(Object.keys(b));
    for (let key of Object.keys(b)) {
        console.log(Object.keys(b[key]));
    }
}

function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (!a && b || !b && a) return false;
    if (typeof a !== "object") {
        return a === b
    }
    output = true;
    // console.log(a);
    // console.log(typeof a === "object");
    for (let key of Object.keys(a)) {
        if (!(Object.keys(b).includes(key))) return false;
        if (Object.keys(a[key]).length !== 0) {
            output = output && deepEqual(a[key], b[key]);
        } else {
            output = output && a[key] === b[key];
        }
    }
    return output;
}

console.log("A LIST");
console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(nth(arrayToList([10, 20, 30]), 3));

console.log("DEEP COMPARISON");

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true