function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else {
    let midIndex = Math.floor(array.length/2)
    let rightSide = array.slice(midIndex)
    let leftSide = array.slice(0, midIndex)
    return merge(mergeSort(rightSide), mergeSort(leftSide));
  }
}

function merge(rightSide, leftSide) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (rightIndex < rightSide.length && leftIndex < leftSide.length) {
    if (rightSide[rightIndex] > leftSide[leftIndex]) {
      result.push(leftSide[leftIndex])
      leftIndex++;
    } else {
      result.push(rightSide[rightIndex]);
      rightIndex++
    }
  }
  return result.concat(leftSide.slice(leftIndex)).concat(rightSide.slice(rightIndex))
}


module.exports = mergeSort;