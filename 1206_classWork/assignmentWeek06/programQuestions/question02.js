let array1 = [4, 5, 2, 1, 0];
let array2 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9];

function missingNumber(array) {
  let missing = [];
  let maxNum = Math.max(...array);
  let minNum = Math.min(...array);

  for (let i = minNum; i <= maxNum; i++) {
    if (!array.includes(i)) {
      missing.push(i);
    }
  }

  return missing;
}

console.log(missingNumber(array1));
console.log(missingNumber(array2));