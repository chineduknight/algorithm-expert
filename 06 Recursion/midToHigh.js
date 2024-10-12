function reverse(str) {
  if (!str.length) return "";
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(string) {
  if (string.length <= 1) return true;
  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, string.length - 1));
  } else {
    return false;
  }
}
function isPalindrome(string, left = 0, right = string.length - 1) {
  if (left >= right) return true;
  if (string[left] === string[right]) {
    return isPalindrome(string, left + 1, right - 1);
  } else {
    return false;
  }
}
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, callback) {
  if (!arr.length) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

/**
 * Avoiding New Array Creation: Instead of slicing the array
 * (which creates a new array at each recursive step and can be costly in terms
 * of memory usage), you can use array indices to manage the recursion,
 * thereby saving space.
 */
function someRecursive(arr, callback, index = 0) {
  if (index === arr.length) return false;
  if (callback(arr[index])) return true;
  return someRecursive(arr, callback, index + 1);
}

function flatten(arr) {
  let newArr = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      newArr = newArr.concat(flatten(element));
    } else {
      newArr.push(element);
    }
  });

  return newArr;
}

function flatten(arr) {
  let result = [];
  function flattenHelper(input) {
    input.forEach((item) => {
      if (Array.isArray(item)) {
        flattenHelper(item);
      } else {
        result.push(item);
      }
    });
  }
  flattenHelper(arr);
  return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function capitalizeFirst(arr) {
  let newArr = [];
  function loop(myArr) {
    if (!myArr.length) return;
    const element = myArr[0];
    const upper = element[0].toUpperCase();
    const newString = upper + element.slice(1);
    newArr.push(newString);
    loop(myArr.slice(1));
  }
  loop(arr);

  return newArr;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

// removes the need for slice
function capitalizeFirst(arr) {
  let newArr = [];

  function loop(index) {
    if (index === arr.length) return; // Base case: stop when index reaches array length
    const element = arr[index];
    const upper = element[0].toUpperCase() + element.slice(1);
    newArr.push(upper);
    loop(index + 1); // Recursive call with incremented index
  }

  loop(0); // Start recursion from the first element
  return newArr;
}

function nestedEvenSum(obj) {
  // console.log(obj)
  let total = 0;
  function helper(obj2) {
    for (const key in obj2) {
      if (Object.hasOwnProperty.call(obj2, key)) {
        const element = obj2[key];
        if (
          typeof element === "object" &&
          element !== null &&
          !Array.isArray(element)
        ) {
          helper(element);
        } else if (typeof element === "number" && element % 2 === 0) {
          total += element;
        }
      }
    }
  }
  helper(obj);
  return total;
}

const obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

const obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10

function capitalizeWords(arr) {
  let newArr = [];
  function myLoop(arrVal) {
    if (!arrVal.length) return;
    newArr = newArr.concat(arrVal[0].toUpperCase());
    myLoop(arrVal.slice(1));
  }
  myLoop(arr);
  return newArr;
}

// this avoids using concat and slice
function capitalizeWords(arr) {
  let newArr = [];
  function myLoop(index) {
    if (index === arr.length) return; // Base case: reached the end of the array
    newArr.push(arr[index].toUpperCase()); // Capitalize the current word and add to newArr
    myLoop(index + 1); // Recursive call with the next index
  }
  myLoop(0); // Start the recursion from the first index
  return newArr;
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function collectStrings(obj) {
  let total = [];
  function helper(obj2) {
    for (const key in obj2) {
      const element = obj2[key];
      if (
        typeof element === "object" &&
        element !== null &&
        !Array.isArray(element)
      ) {
        helper(element);
      } else if (typeof element === "string") {
        total.push(element);
      }
    }
  }
  helper(obj);
  return total;
}

/**
 * Recursively converts all number values in an object to strings.
 * @param {Object} obj The input object containing potentially nested numbers.
 * @returns {Object} A new object with all numbers converted to strings.
 */
function stringifyNumbers(obj) {
  const newObj = {};
  for (let key in obj) {
    const currentValue = obj[key];
    if (isObject(currentValue)) {
      newObj[key] = stringifyNumbers(currentValue);
    } else if (typeof currentValue === "number") {
      newObj[key] = currentValue.toString();
    } else {
      newObj[key] = currentValue;
    }
  }
  return newObj;
}

/**
 * Determines if a value is a plain object.
 * @param {*} element The value to check.
 * @returns {boolean} True if the value is a plain object, false otherwise.
 */
function isObject(element) {
  return (
    typeof element === "object" && element !== null && !Array.isArray(element)
  );
}

// Example usage:
let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

let newObj = stringifyNumbers(obj);
console.log(newObj);
