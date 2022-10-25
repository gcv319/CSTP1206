let array = [2, 11, -20, 3, 0, -3];

function minElement(array) {

  const min = array.reduce((a, b) => Math.min(a, b));
  return min;
}

console.log(minElement(array));