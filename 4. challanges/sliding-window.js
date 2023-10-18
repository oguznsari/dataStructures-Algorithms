function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  var max = null;
  let temp;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2), "->", 700); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), "->", 39); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2), "->", 5); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2), "->", 5); // 5
console.log(maxSubarraySum([2, 3], 3), "->", null); // null
