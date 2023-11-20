/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  value = 0;
  for (let i = 0; i < s.length; i++) {
    symbols[s[i]] < symbols[s[i + 1]]
      ? (value -= symbols[s[i]])
      : (value += symbols[s[i]]);
  }
  return value;
};

console.log(romanToInt("III"), "->", 3);
console.log(romanToInt("LVIII"), "->", 58);
console.log(romanToInt("MCMXCIV"), "->", 1994);
