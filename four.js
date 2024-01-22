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

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// // → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20