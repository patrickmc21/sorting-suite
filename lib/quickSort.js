function quickSort(array) {
  if (array.length <= 1) {
    return array
  }
  let pivot = array.pop();
  let greaterThanPivot = [];
  let lessThanPivot = [];
  for(let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      lessThanPivot.push(array[i])
    } else {
      greaterThanPivot.push(array[i])
    }
  }
  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)];
}

module.exports = quickSort;