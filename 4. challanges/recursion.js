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
    return arr[arr.length -1] * productOfArray(arr.slice(0, arr.length -1)) 
}
console.log(productOfArray([1,2,3]), "->", 6);
console.log(productOfArray([1,2,3,10]), "->", 60);