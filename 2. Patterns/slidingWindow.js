function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
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

// efficient - from course -> Sliding window
function maxSubarraySumSlidingWindow(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

let arr = [2, 6, 9, 2, 1, 8, 5, 6, 3];

console.time("maxSubarraySum");
let res1 = maxSubarraySum(arr, 3);
console.timeEnd("maxSubarraySum");
console.log({ res1 });

console.time("maxSubarraySumSlidingWindow");
let res2 = maxSubarraySumSlidingWindow(arr, 3);
console.timeEnd("maxSubarraySumSlidingWindow");
console.log({ res2 });
