const findMe = (array, searchValue) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === searchValue) {
      return i;
    }
  }
  return -1;
};

// console.log(findMe([1, 2, 3, 4, 5, 6], 3));
// console.log(findMe([1, 2, 3, 4, 5, 6], 2));
// console.log(findMe([1, 2, 3, 4, 5, 6], 9));

const binarySearch = (arr, search) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // let middle = Math.round((left + right) / 2);
    // let middle = Math.floor((left + right) / 2);
    // (using bitwise shift, which also implicitly floors the result).
    let middle = (left + right) >> 1;

    const value = arr[middle];
    if (value === search) {
      return middle;
    } else if (value < search) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

/**
 * left = 0
 * right 2
 * middle = 0+2/2 = 1
 *
 * left = 2
 * right = 2
 * middle = 2+2/2 =
 * m */

console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearch([1, 2, 3], 9));
