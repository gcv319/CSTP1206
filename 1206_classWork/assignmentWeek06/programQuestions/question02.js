let array1 = [4, 5, 2, 1, 0]; // 3
let array2 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9]; // 8

// finds the missing number in the array
function missingNumber(array, n) {
  // an empty array which we will use to put all the missing numbers in
  // let missing = [];

  // this for loop goes from 0 to the maxNum of the array and checks if
  // it is in the array or not; if not we push it to the missing array
  // for (let i = 0; i <= n; i++) {
  //   if (array.indexOf(i) == -1) {
  //     missing.push(i);
  //   }
  // }

  // return missing;

  // array.sort((a, b) => { return a - b });

  // const missingNum = array.findIndex((num, index) => {
  //   if (num !== index) {
  //     return index;
  //   }
  // })

  // return missingNum;

  // This gets the sum of all the numbers from 0 -> n
  let sum = (n + 1) * (n) / 2;

  // This reduces the array we the actual sum and subtracts it with the maximum
  // theoretical sum of 0 -> n; therefore getting our missing number
  let missingNum = sum - array.reduce((x, y) => x + y);
  return missingNum;
}

console.log(missingNumber(array1, 5));
console.log(missingNumber(array2, 10));