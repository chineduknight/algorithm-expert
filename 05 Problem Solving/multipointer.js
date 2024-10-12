/**
 * Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
 *
 */

function averagePair(arr, targetAvg) {
  if (!arr.length) return false;

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const avg = (arr[start] + arr[end]) / 2;
    if (avg === targetAvg) {
      return true;
    } else if (avg > targetAvg) {
      end--;
    } else {
      start++;
    }
  }
  return false;
}

// console.log(averagePair([1, 2, 3, 6], 3.5)); // true
// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

/**
Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1) */

function isSubsequence(subStr, str) {
  // good luck. Add any arguments you deem necessary.
  let firstPointer = 0;
  let secPointer = 0;
  while (firstPointer <= subStr.length - 1 && secPointer <= str.length - 1) {
    const subVal = subStr[firstPointer];
    const strVal = str[secPointer];
    if (subVal === strVal) {
      firstPointer++;
      secPointer++;
    } else {
      secPointer++;
    }
    if (firstPointer > subStr.length - 1) {
      return true;
    }
  }
  return false;
}

//slightly optimized
function isSubsequence(subStr, str) {
  let firstPointer = 0;
  let secPointer = 0;

  while (firstPointer < subStr.length && secPointer < str.length) {
    if (subStr[firstPointer] === str[secPointer]) {
      firstPointer++; // Move to next character in subStr
    }
    secPointer++; // Always move to the next character in str
  }

  return firstPointer === subStr.length; // Check if all characters were found
}

// console.log(isSubsequence("abc", "abracadabra"));
// console.log(isSubsequence("hello", "hello world")); // true
// console.log(isSubsequence("singz", "sting")); // true
// console.log(isSubsequence("abc", "abracadabra")); // true
// console.log(isSubsequence("abc", "acb")); // false (orde) matters)
