let array1 = [4, 5, 2, 1, 0]; // 3
let array2 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9]; // 8

// finds the missing number in the array
function missingNumber(array, n) {

  // This gets the sum of all the numbers from 0 -> n
  let sum = (n + 1) * (n) / 2;

  // This reduces the array we the actual sum and subtracts it with the maximum
  // theoretical sum of 0 -> n; therefore getting our missing number
  let missingNum = sum - array.reduce((x, y) => x + y);

  return missingNum;
}

console.log(missingNumber(array1, 5));
console.log(missingNumber(array2, 10));