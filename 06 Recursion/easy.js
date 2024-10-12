function power(num, exp) {
  if (exp <= 0) return 1;
  return num * power(num, exp - 1);
}
// 2*2*2*2
// console.log(power(2, 1));
// console.log(power(2, 1));
// console.log(power(2, 2));
// console.log(power(2, 4));

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}
// console.log(productOfArray([1, 2, 3, 10]));

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
// 1 1 2 3 5
function fib(num) {
  if (num === 1 || num === 2) return 1;
  return fib(num - 1) + fib(num - 2);
}
console.log(fib(3));
console.log(fib(4));
console.log(fib(4));
console.log(fib(10));
console.log(fib(28));

// uses memoization to reduce the number of calls to the stack
// since fib is called twice this would save some calls

function fib(num, memo = {}) {
  if (memo[num]) return memo[num];
  if (num === 1 || num === 2) return 1;
  memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
  return memo[num];
}
