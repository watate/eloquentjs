let arrays = [[1, 2, 3], [4, 5], [6]];
newArrays = arrays.reduce((a, b) => a.concat(b));
console.log(newArrays);