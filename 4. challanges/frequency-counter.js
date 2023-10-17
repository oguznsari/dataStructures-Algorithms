function sameFrequency(num1, num2) {
  let ns1 = num1.toString().split("");
  let ns2 = num2.toString().split("");

  if (num1.length !== num2.length) {
    return false;
  }

  let freq1 = {};
  let freq2 = {};

  for (let val of ns1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }

  for (let val of ns2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }

  for (let val of ns1) {
    if (freq1[val] !== freq2[val]) {
      return false;
    }
  }

  return true;
}

console.log(sameFrequency(182, 821)); // true
console.log(sameFrequency(184, 821)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
