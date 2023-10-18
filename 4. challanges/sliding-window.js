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

// 2
function minSubArrayLen(arr, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7), "->", 2); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9), "->", 2); // 2 -> because [5,4] is the smallest subarray
console.log(
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52),
  "->",
  1
); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39), "->", 3); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55), "->", 5); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11), "->", 2); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95), "->", 0); // 0

// 3

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring(""), "->", 0);
console.log(findLongestSubstring("rithmschool"), "->", 7);
console.log(findLongestSubstring("thisisawesome"), "->", 6);
console.log(findLongestSubstring("thecatinthehat"), "->", 7);
console.log(findLongestSubstring("bbbbbb"), "->", 1);
console.log(findLongestSubstring("longestsubstring"), "->", 8);
console.log(findLongestSubstring("thisishowwedoit"), "->", 6);
