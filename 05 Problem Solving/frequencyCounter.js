function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  // If the first element is positive, there can't be a sum of zero.
  if (arr[0] > 0) return;

  while (left < right) {
    // If both pointers are at zero, the only valid sum-zero pair is [0, 0].
    if (arr[left] === 0 && arr[right] === 0) {
      return [0, 0];
    }
    // If one pointer is at zero, and because the array is sorted, there can be no sum-zero pair.
    else if (arr[left] === 0 || arr[right] === 0) {
      return;
    }

    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function sameFrequency(integer1, integer2) {
  const feqCounter1 = {};
  const feqCounter2 = {};

  const arr1 = integer1.toString().split("");
  const arr2 = integer2.toString().split("");
  if (arr1.length !== arr2.length) return false;

  arr1.forEach((digit) => {
    feqCounter1[digit] = (feqCounter1[digit] || 0) + 1;
  });
  for (let val of arr2) {
    feqCounter2[val] = (feqCounter2[val] || 0) + 1;
  }
  for (let key in feqCounter1) {
    if (feqCounter2[key] !== feqCounter1[key]) {
      return false;
    }
  }
  return true;
}

// console.log(sameFrequency(182, 281));
// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

function sameFrequencyOptimized(integer1, integer2) {
  const freqCounter = {};

  const str1 = integer1.toString();
  const str2 = integer2.toString();

  if (str1.length !== str2.length) return false;

  // Increment the frequency counter based on digits of the first integer
  for (let char of str1) {
    freqCounter[char] = (freqCounter[char] || 0) + 1;
  }

  // Decrement the frequency counter based on digits of the second integer
  for (let char of str2) {
    if (!freqCounter[char]) return false; // if the counter goes below zero or the digit wasn't in the first integer
    freqCounter[char] -= 1;
  }
  return true;
}

function areThereDuplicates(...args) {
  const freqCounter = {};

  // Increment the frequency counter based on arg
  for (let value of args) {
    freqCounter[value] = (freqCounter[value] || 0) + 1;
  }

  // check if element is greater than one
  for (const key in freqCounter) {
    const element = freqCounter[key];
    if (element > 1) return true;
  }

  return false;
}
// console.log(areThereDuplicates("a", 2, 3, "a"));
// console.log(areThereDuplicates(1, 2, 3));
// console.log(areThereDuplicates(1, 2, 2));
// console.log(areThereDuplicates("a", "b", "c", "a"));

function areThereDuplicatesOptimized(...args) {
  const freqCounter = {};

  for (let value of args) {
    if (freqCounter[value]) {
      return true; // Return immediately when a duplicate is found
    }
    freqCounter[value] = true;
  }

  return false;
}

// Multiple Pionters
// O(n log n) and space complexity of O(1)
function areThereDuplicates2(...args) {
  args.sort((a, b) => (a > b ? 1 : -1)); // Sort the arguments

  let start = 0;
  for (let i = 1; i < args.length; i++) {
    if (args[start] === args[i]) {
      return true;
    }
    start = i; // Move the pointer to the next unique element
  }

  return false;
}

// One Liner Solution areThereDuplicates
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

/**
Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("");

† Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.
    Test.assertEquals(firstNonRepeatingLetter('a'), 'a');
    Test.assertEquals(firstNonRepeatingLetter('stress'), 't');
    Test.assertEquals(firstNonRepeatingLetter('moonmen'), 'e');
    Test.assertEquals(firstNonRepeatingLetter(''), '');
     Test.assertEquals(firstNonRepeatingLetter('sTreSS'), 'T');
    Test.assertEquals(firstNonRepeatingLetter('Go hang a salami, I\'m a lasagna hog!'), ',');
*/
function firstNonRepeatingLetter(str) {
  if (!str.length) return "";
  if (str.length === 1) return str;
  // loop through the string and get the letter and position
  const feqCounter1 = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (feqCounter1[char]) {
      feqCounter1[char] = {
        ...feqCounter1[char],
        count: feqCounter1[char].count + 1,
      };
    } else {
      feqCounter1[char] = {
        count: 1,
        postion: i,
      };
    }
  }

  let lowestCount = Infinity;
  let lowestPosition = Infinity;
  let allCountsEqual = true; // Track if all counts are equal
  let initialCount = null; // Store the first count to compare against

  for (let key in feqCounter1) {
    const item = feqCounter1[key];
    if (initialCount === null) {
      initialCount = item.count; // Set initial count from the first element
    } else if (item.count !== initialCount) {
      allCountsEqual = false; // Found a different count, set flag to false
    }

    // Check if the current item's count is less than the current lowest count
    if (item.count < lowestCount) {
      lowestCount = item.count;
      lowestPosition = item.postion;
      resultKey = key; // keep track of the key which has the lowest count
    } else if (item.count === lowestCount) {
      // If there is a tie on count, take the lower position
      if (item.postion < lowestPosition) {
        lowestPosition = item.postion;
        resultKey = key; // update the key if the position is also the lowest
      }
    }
  }

  // If all counts were equal, reset resultKey to an empty string
  if (allCountsEqual) {
    return "";
  }
  return str[lowestPosition];
}

function firstNonRepeatingLetterOpti(str) {
  if (!str.length) return "";
  if (str.length === 1) return str;

  const freqCounter = {};
  // Loop through the string and create a frequency counter where each key
  // is the lowercase version of the character, but we store the first occurrence
  // in its original case.
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (freqCounter[char]) {
      freqCounter[char].count += 1;
    } else {
      freqCounter[char] = {
        count: 1,
        firstOccurrence: str[i], // Store the original character
      };
    }
  }

  // Find the first character that appears only once in the string
  for (let char in freqCounter) {
    if (freqCounter[char].count === 1) {
      return freqCounter[char].firstOccurrence;
    }
  }

  // If no non-repeating character is found
  return "";
}

// console.log(firstNonRepeatingLetter("moonmen"));
// console.log(firstNonRepeatingLetter("stress"));
// console.log(firstNonRepeatingLetter("a"));
// console.log(firstNonRepeatingLetter("aabbccddee"));
