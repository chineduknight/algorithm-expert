//
function getDigit(num, place) {
  // Handle negative numbers by taking the absolute value
  let absNum = Math.abs(num);

  // Shift the number right 'place' times and return the last digit
  return Math.floor(absNum / Math.pow(10, place)) % 10;
}

function maxDigits(num) {
  if (num === 0) return 1; // Edge case for 0
  num = Math.abs(num); // Handle negative numbers by taking absolute value
  return Math.floor(Math.log10(num) + 1);
}
function maxDigitsInArray(numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    max = Math.max(max, maxDigits(numbers[i]));
  }
  return max;
}
const radixSort = (numToSort) => {
  const maxDigit = maxDigitsInArray(numToSort);
  // console.log("maxDigit:", maxDigit);
  let bucket = [];
  for (let i = 0; i < maxDigit; i++) {
    bucket = [];
    for (let j = 0; j < numToSort.length; j++) {
      const element = numToSort[j];
      const place = getDigit(element, i);
      if (Array.isArray(bucket[place])) {
        bucket[place].push(element);
      } else {
        bucket[place] = [element];
      }
    }
    numToSort = [].concat(...bucket);
    console.log("bucket:", bucket);
  }
  return numToSort;
};
console.log(radixSort([1, 23, 434, 111, 23, 0, 4]));

// ---------Final Version----------
function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []); // Array of 10 empty arrays
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // Flatten the array of buckets into a single array
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([1, 23, 434, 111, 23, 0, 4])); // Should output a sorted array
