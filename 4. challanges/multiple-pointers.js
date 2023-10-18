function averagePair(arr, target) {
  let tSum = target * 2;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === tSum) {
      return true;
    } else if (arr[left] + arr[right] < tSum) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5), "->", true);
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), "->", true);
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1), "->", false);
console.log(averagePair([], 4), "->", false);

// 2nd
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }

  return false;
}

console.log(isSubsequence("sing", "sting"), "->", true); // true
console.log(isSubsequence("abc", "abracadabra"), "->", true); // true
console.log(isSubsequence("abc", "acb"), "->", false); // false (order matters)
console.log(isSubsequence("hello", "hello world"), "->", true); // true
