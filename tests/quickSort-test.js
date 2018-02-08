import { assert } from 'chai';
import index from '../lib/index'

import quickSort from '../lib/quickSort'

function createArray(arrayMaxSize, arrayMinSize, maxNumber) {
  let arr = []
  for (let i = 0; i < Math.floor(Math.random() * (arrayMaxSize - arrayMinSize) + arrayMinSize); i++) {
    arr.push(Math.floor(Math.random() * maxNumber))
  }
  return arr;
}

function validateSortedArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i+1] && i < array.length - 2) {
      return false;
    } else {
      return true;
    }
  }
}

describe('quick sort', () => {
  it('should sort small arrays of numbers', () => {
    let array = [5,4,2,3,1];
    let sortedArray = quickSort(array);
    assert.deepEqual(sortedArray, [1,2,3,4,5])
  })

  it('should sort arrays of letters', () => {
    let array = ['b','e','c','a','d'];
    let sortedArray = quickSort(array);
    assert.deepEqual(sortedArray, ['a','b','c','d','e'])
  })

  it('should sort arrays of positive and negative numbers', () => {
    let array = [1,0,-1,2,-2];
    let sortedArray = quickSort(array);
    assert.deepEqual(sortedArray, [-2,-1,0,1,2])
  })

  it('should sort an array of random numbers', () => {
    let array = createArray(10, 1, 400);
    let sortedArray = quickSort(array);
    assert.deepEqual(validateSortedArray(sortedArray), true);
  })

  it('should sort a very large array of random numbers', () => {
    let array = createArray(1200000, 1200000, 10000);
    let sortedArray = quickSort(array);
    assert.deepEqual(validateSortedArray(sortedArray), true);
  })
})

