let array1 = [4, 5, 2, 1, 0]; // 3
let array2 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9]; // 8

// finds the missing number in the array
function missingNumber(array) {
  // an empty array which we will use to put all the missing numbers in
  let missing = [];
  // we get the max num of the array
  let maxNum = Math.max(...array);

  // this for loop goes from 0 to the maxNum of the array and checks if
  // it is in the array or not; if not we push it to the missing array
  for (let i = 0; i <= maxNum; i++) {
    if (!array.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(missingNumber(array1));
console.log(missingNumber(array2));