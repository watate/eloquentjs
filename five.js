// FLATTENING
// let arrays = [[1, 2, 3], [4, 5], [6]];
// newArrays = arrays.reduce((a, b) => a.concat(b));
// console.log(newArrays);

// YOUR OWN LOOP
// function loop(value, testFunc, updateFunc, bodyFunc) {
//     for (let i = value; testFunc(i); i = updateFunc(i)) {
//         bodyFunc(i);
//     }
// }

// loop(3, n => n > 0, n => n - 1, console.log);

// EVERYTHING
// function every(array, test) {
//     if (array.length === 0) return true
//     return array.map(test).reduce((a, b) => a && b);
// }
  
//   console.log(every([1, 3, 5], n => n < 10));
//   // → true
//   console.log(every([2, 4, 16], n => n < 10));
//   // → false
//   console.log(every([], n => n < 10));
//   // → true

// Dominant writing direction
function dominantDirection(text) {
    // Your code here.
    return countBy(text, char => {
         script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).reduce((a, b) => a.count > b.count ? a.name : b.name);
  }