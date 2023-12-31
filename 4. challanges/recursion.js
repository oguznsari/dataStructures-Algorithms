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

// 6
function reverse(str) {
  if (str.length <= 0) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome"), "->", "emosewa");
console.log(reverse("rithmschool"), "->", "loohcsmhtir");

// 7
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("awesome"), "->", false);
console.log(isPalindrome("foobar"), "->", false);
console.log(isPalindrome("tacocat"), "->", true);
console.log(isPalindrome("amanaplanacanalpanama"), "->", true);
console.log(isPalindrome("amanaplanacanalpandemonium"), "->", false);

// 8
const isOdd = (val) => val % 2 !== 0;
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
console.log(someRecursive([1, 2, 3, 4], isOdd), "->", true);
console.log(someRecursive([4, 6, 8, 9], isOdd), "->", true);
console.log(someRecursive([4, 6, 8], isOdd), "->", false);
console.log(
  someRecursive([4, 6, 8], (val) => val > 10),
  "->",
  false
);

// 9
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]]), "->", [1, 2, 3, 4, 5]);
console.log(flatten([1, [2, [3, 4], [[5]]]]), "->", [1, 2, 3, 4, 5]);
console.log(flatten([[1], [2], [3]]), "->", [1, 2, 3]);
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]), "->", [1, 2, 3]);

// 10
function capitalizeFirst(array) {
  if (array.length === 0) {
    return [];
  }

  const firstWord = array[0];
  const capitalizedFirstWord =
    firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase();

  return [capitalizedFirstWord, ...capitalizeFirst(array.slice(1))];
}

console.log(capitalizeFirst(["car", "taco", "banana"]), "->", [
  "Car",
  "Taco",
  "Banana",
]);

// 11
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1), "->", 6);
console.log(nestedEvenSum(obj2), "->", 10);

// 12
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words), "->", ["I", "AM", "LEARNING", "RECURSION"]);

// 13
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj), "->", "numbers stringified in obj");

// 14
function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}

const obje = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obje), "->", ["foo", "bar", "baz"]);
