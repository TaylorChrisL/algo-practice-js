// Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

// Input: [99, 101, 88, 4, 2000, 50]
// Output: [99, 88, 4, 50]

function selectLessThan(array) {
  let output = [];
  array.forEach((e) => {
    if (e < 100) {
      output.push(e);
    }
  });
  return output;
}

console.log(selectLessThan([99, 101, 88, 4, 2000, 50]));
