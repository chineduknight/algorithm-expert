// console.log("sadfad");

/**
 *
Sliding Window - maxSubarraySum
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null
Constraints:

Time Complexity - O(N)

Space Complexity - O(1)
 *
 */

function maxSubarraySum(array, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < num) return null;
  for (let i = 0; i < num; i++) {
    const value = array[i];
    maxSum += value;
  }
  tempSum = maxSum;
  for (let i = num; i < array.length - num; i++) {
    const numRemoved = array[i - num];
    const numAdded = array[i];
    tempSum = tempSum - numRemoved + numAdded;
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));

function minSubArrayLen(nums, target) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (end < nums.length) {
    // Add the current element to total and see if it needs to expand
    total += nums[end];

    // Once total is equal or greater than target, try to shrink the window
    while (total >= target) {
      minLen = Math.min(minLen, end - start + 1); // Update the minimum length
      total -= nums[start]; // Remove the start element of the window
      start++; // Move the start up to shrink the window
    }

    // Expand the window
    end++;
  }

  // Check if we've found a valid minimum length, return 0 if no valid subarray was found
  return minLen === Infinity ? 0 : minLen;
}

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));

function findLongestSubstring(str) {
  let start = 0; // Start index of the sliding window
  let maxLength = 0; // Max length of substring with all distinct characters
  let charIndexMap = {}; // Map to store the last indices of characters

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    // If the character is already in the map, move the start position
    // to the right of the last occurrence to avoid duplicates
    if (currentChar in charIndexMap) {
      start = Math.max(start, charIndexMap[currentChar] + 1);
    }

    // Update the last index of the character to the current position
    charIndexMap[currentChar] = end;

    // Calculate the length of the current substring without repeating characters
    // and update maxLength if it's the largest we've seen so far
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
/**
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
 *
*/
function findLongestSubstringLenght(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char] + 1);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i;
  }
  return longest;
}
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
  let longestStart = 0; // Starting index of the longest substring

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char] && seen[char] > start) {
      start = seen[char];
    }
    if (i - start + 1 > longest) {
      longest = i - start + 1;
      longestStart = start;
    }
    // Store the index of the next char so as to not double count
    seen[char] = i + 1;
  }

  // Extract and return the longest substring using the start index and length
  return str.substring(longestStart, longestStart + longest);
}

console.log(findLongestSubstring("acbb")); // 1
