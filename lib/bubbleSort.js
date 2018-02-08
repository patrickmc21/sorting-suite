function bubbleSort(arrayToSort) {
  for (let i = 0; i < arrayToSort.length; i++) {
    
    for (let j = 1; j < arrayToSort.length - i; j++ ) {
      if (arrayToSort[j -1] > arrayToSort[j]) {
        [ arrayToSort[j -1], arrayToSort[j] ] = [ arrayToSort[j], arrayToSort[j -1] ];
      }
    }
  }
  return arrayToSort
}

module.exports = bubbleSort;