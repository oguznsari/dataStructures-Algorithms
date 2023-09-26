/**
 * Loop through integers from 1 to n
 * O(n) -> Linear time
 *
 * @param {number} n
 * @returns number
 */
function addUpTo(n) {
  console.time("addUpTo");
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  console.timeEnd("addUpTo");
  return total;
}

/**
 * Mathematical formula, no loop
 * O(1) -> Constant time
 *
 * @param {number} n
 * @returns number
 */
function addUp2(n) {
  console.time("addUp2");
  let total = (n * (n + 1)) / 2;

  console.timeEnd("addUp2");
  return total;
}

/**
 * Inner loop: Loop through integers from 1 to n and inside does the same again
 * O(n2) -> Quadratic time
 *
 * @param {number} n
 * @returns number
 */
function printAllPairs(n) {
  console.time("printAllPairs");
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      // console.info(i, j);
    }
  }
  console.timeEnd("printAllPairs");
  return true;
}

/**
 * O(1) -> Constant time -> min
 * @param {number} n
 */
function logAtMost10(n) {
  console.time("logAtMost10");
  for (var i = 1; i <= Math.min(n, 10); i++) {
    // console.log(i);
  }
  console.timeEnd("logAtMost10");
}

/**
 * O(n) -> Linear time -> max
 * @param {number} n
 */
function logAtLeast10(n) {
  console.time("logAtLeast10");
  for (var i = 1; i <= Math.max(n, 10); i++) {
    // console.log(i);
  }
  console.timeEnd("logAtLeast10");
}

let testUpTo = 10000;

addUpTo(testUpTo);
addUp2(testUpTo);
printAllPairs(testUpTo);
logAtMost10(testUpTo);
logAtLeast10(testUpTo);
