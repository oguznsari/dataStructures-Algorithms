function power(base, pow) {
  if (pow === 0) return 1;
  return base * power(base, pow - 1);
}

console.log(power(2, 0), "->", 1);
console.log(power(2, 2), "->", 4);
console.log(power(2, 4), "->", 16);

// 2
function factorial(num) {
  if (num < 2) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(1), "->", 1); // 1
console.log(factorial(2), "->", 2); // 2
console.log(factorial(4), "->", 24); // 24
console.log(factorial(7), "->", 5040); // 5040

// 3
function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[arr.length - 1] * productOfArray(arr.slice(0, arr.length - 1));
}
console.log(productOfArray([1, 2, 3]), "->", 6);
console.log(productOfArray([1, 2, 3, 10]), "->", 60);

// 4
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
console.log(recursiveRange(6), "->", 21); // 21
console.log(recursiveRange(10), "->", 55); // 55

// 5
// 1 1 2 3 5 8 ....
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4), "->", 3); // 3
console.log(fib(10), "->", 55); // 55
console.log(fib(28), "->", 317811); // 317811
console.log(fib(35), "->", 9227465); // 9227465
