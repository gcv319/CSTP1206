let array = [2, 11, -20, 3, 0, -3];

function minElement(array) {

  const min = array.reduce((a, b) => Math.min(a, b));
  return min;
}

console.log(minElement(array));

let array2 = [2, 4, 11, 2, 4];

function singleElement(array) {

  let dupes = new Map();

  for (let num of array) {
    if (dupes.has(num)) {
      dupes.set(num, dupes.get(num) + 1);
    }
    else {
      dupes.set(num, 1);
    }
  }

  for (let num of dupes.keys()) {
    if (dupes.get(num) == 1) {
      return num;
    }
  }
}

console.log(singleElement(array2))