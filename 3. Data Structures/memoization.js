const { performance } = require("perf_hooks");

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function fibMemo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  memo[n] = res;
  return res;
}

function fibTabulation(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}

performance.mark("start-fib");
const result1 = fib(35);
performance.mark("end-fib");
performance.measure("fib-duration", "start-fib", "end-fib");
const duration1 = performance.getEntriesByName("fib-duration")[0].duration;

performance.mark("start-fib-with-memoization");
const result2 = fibMemo(35);
performance.mark("end-fib-with-memoization");
performance.measure(
  "fib-with-memoization-duration",
  "start-fib-with-memoization",
  "end-fib-with-memoization"
);
const duration2 = performance.getEntriesByName(
  "fib-with-memoization-duration"
)[0].duration;

performance.mark("tabulationStart");
const result3 = fibTabulation(35);
performance.mark("tabulationEnd");
performance.measure("fibTabulation", "tabulationStart", "tabulationEnd");
const duration3 = performance.getEntriesByName("fibTabulation")[0].duration;

const timingData = {
  "Fibonacci without Memoization": { Result: result1, Duration: duration1 },
  "Fibonacci with Memoization": { Result: result2, Duration: duration2 },
  "Fibonacci with Tabulation": { Result: result3, Duration: duration3 },
};

console.table(timingData);
