// Given an array, write a function that returns an array that contains the original array’s values in reverse.

// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

function reverse(array) {
  let newArray = [];

  index = 1;
  while (index <= array.length) {
    newArray.push(array[array.length - index]);
    index++;
  }
  return newArray;
}

console.log(reverse([1, 2, 3, 4, 5]));
