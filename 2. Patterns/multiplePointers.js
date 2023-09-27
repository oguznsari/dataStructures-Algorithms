function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// time complexity ⇒ O(N^2)
// space complexity ⇒ O(1)

/**
 * multiple pointers, fixes time complexity problem for us
 *
 * @param {string} arr
 * @returns
 */
function sumZeroN(arr) {
  let left = 0;
  let right = arr.length - 1;

  // condition escapes to compare it to itself like 0-0
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// time complexity ⇒ O(N)
// space complexity ⇒ O(1)

let testArray = [-5, -4, -3, -2, -1, 0, 2, 7, 10, 12, 25];
console.time("sumZero");
let res1 = sumZero(testArray);
console.timeEnd("sumZero");

console.time("sumZeroN");
let res2 = sumZeroN(testArray);
console.timeEnd("sumZeroN");

// 2nd problem
function countUniqueValues(arr) {
  let left = 0;
  let right = 0;

  if (arr.length === 0) {
    return 0;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }

    if (right === arr.length) {
      return arr.slice(0, left + 1).length;
    }
  }
}

let testArray2 = [-5, -5, -5, -5, -5, 0, 0, 10, 10, 12, 12, 12, 12];
let res3 = countUniqueValues(testArray2);
console.log(res3);

// course solution
// course
function countUniqueValues2(arr) {
  // short circuit
  if (arr.length === 0) {
    return 0;
  }

  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}
