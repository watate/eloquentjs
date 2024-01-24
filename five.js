// FLATTENING
// let arrays = [[1, 2, 3], [4, 5], [6]];
// newArrays = arrays.reduce((a, b) => a.concat(b));
// console.log(newArrays);

// YOUR OWN LOOP
function loop(value, testFunc, updateFunc, bodyFunc) {
    for (let i = value; testFunc(i); i = updateFunc(i)) {
        bodyFunc(i);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
