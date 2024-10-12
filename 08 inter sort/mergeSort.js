const mergeArr = (arr1, arr2) => {
  let result = [];
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    const value1 = arr1[pointer1];
    const value2 = arr2[pointer2];
    if (value1 > value2) {
      result.push(value2);
      pointer2++;
    } else {
      result.push(value1);
      pointer1++;
    }
  }
  // console.log(pointer1, pointer2);
  if (pointer1 === arr1.length) {
    for (let i = pointer2; i < arr2.length; i++) {
      const element = arr2[i];
      // console.log(element);
      result.push(element);
    }
  } else {
    for (let i = pointer1; i < arr1.length; i++) {
      const element = arr1[i];
      // console.log(element);
      result.push(element);
    }
  }
  return result;
  /**
   * This is an alternative way of doing it
   *  Add remaining elements from arr1, if any
  while (pointer1 < arr1.length) {
    result.push(arr1[pointer1]);
    pointer1++;
  }

  // Add remaining elements from arr2, if any
  while (pointer2 < arr2.length) {
    result.push(arr2[pointer2]);
    pointer2++;
  }
   *
   */
};
// console.log(mergeArr([], [1, 1, 2, 14, 99, 100]));

const mymergeSort = (arry) => {
  // console.log(arry);
  if (arry.length <= 1) {
    return arry;
  } else {
    const half = Math.floor(arry.length / 2);
    const firstPart = mergeSort(arry.slice(0, half));
    const secondPart = mergeSort(arry.slice(half));
    return mergeArr(firstPart, secondPart);
  }
};

// console.log(mergeSort([5, 3, 1, 6, 7]));
// console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // Should return a sorted array from 1 to 10
// console.log(mergeSort([])); // Should return an empty array
// console.log(mergeSort([1])); // Should return [1]

const merge = (leftArr, rightArr) => {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two arrays by comparing elements
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArray.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left array
  while (leftIndex < leftArr.length) {
    mergedArray.push(leftArr[leftIndex]);
    leftIndex++;
  }

  // Add any remaining elements from the right array
  while (rightIndex < rightArr.length) {
    mergedArray.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return mergedArray;
};
const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const leftPart = mergeSort(array.slice(0, middleIndex));
  const rightPart = mergeSort(array.slice(middleIndex));

  return merge(leftPart, rightPart);
};
