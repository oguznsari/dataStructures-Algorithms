function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

/**
 * Binary Search
 * assumes the given array is sorted
 * time complexity => O(log(N))
 *
 * @param { array } array
 * @param { number } val
 * @returns
 */
function binarySearch(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.time("search");
let res1 = search(arr, 9);
console.timeEnd("search");
console.log({ res1 });

console.time("binarySearch");
let res2 = binarySearch(arr, 9);
console.timeEnd("binarySearch");
console.log({ res2 });
