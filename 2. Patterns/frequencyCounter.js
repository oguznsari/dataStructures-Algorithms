// this is O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// this is O(n)
function sameFC(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [16, 9, 4, 1, 25];
console.time("innerLoop");
same(arr1, arr2);
console.timeEnd("innerLoop");

console.time("FrequencyCounter");
sameFC(arr1, arr2);
console.timeEnd("FrequencyCounter");

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let letter of str1) {
    frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1;
  }
  for (let letter of str2) {
    frequencyCounter2[letter] = (frequencyCounter2[letter] || 0) + 1;
  }
  for (let letter of str1) {
    if (frequencyCounter1[letter] !== frequencyCounter2[letter]) {
      return false;
    }
  }
  return true;
}

function validAnagram2(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

let str1 = "aazaazaazaazaaz";
let str2 = "azaazaazaazaaza";

console.time("myAnagramFCSolution");
let res1 = validAnagram(str1, str2);
console.timeEnd("myAnagramFCSolution");

console.time("courseAnagramFCSolution");
let res2 = validAnagram2(str1, str2);
console.timeEnd("courseAnagramFCSolution");

console.log({ res1, res2 });
