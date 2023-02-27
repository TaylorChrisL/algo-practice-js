// Write a function that returns the greatest value from an array of numbers.

// Input: [5, 17, -4, 20, 12]
// Output: 20

function max(array) {
  let output = array[0];
  array.forEach((e) => {
    if (e > output) {
      output = e;
    }
  });
  return output;
}

console.log(max([5, 17, -4, 20, 12]));
