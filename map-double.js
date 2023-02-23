// Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

// Input: [4, 2, 5, 99, -4]
// Output: [8, 4, 10, 198, -8]

function double(array) {
  let output = [];
  array.forEach((e) => {
    output.push(e * 2);
  });
  return output;
}

console.log(double([4, 2, 5, 99, -4]));
