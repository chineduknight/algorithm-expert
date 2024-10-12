const pivot = (array, start, end) => {
  function swap(arr, from, to) {
    const temp = arr[from];
    arr[from] = arr[to];
    arr[to] = temp;
  }

  let pivotIndex = start; // Start pivotIndex at the start index
  const pivotElement = array[start];

  for (let i = start + 1; i <= end; i++) {
    // Ensure loop goes up to 'end'
    if (array[i] < pivotElement) {
      pivotIndex++;
      swap(array, pivotIndex, i);
    }
  }

  swap(array, start, pivotIndex); // Swap pivot to its correct position

  return pivotIndex;
};

const testArray = [15, 8, 2, 1, 5, 7, 6, 3, 11, 13];

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const pivIndex = pivot(array, left, right);
    quickSort(array, left, pivIndex - 1);
    quickSort(array, pivIndex + 1, right);
  }
  return array;
};
// console.log(quickSort(testArray));
