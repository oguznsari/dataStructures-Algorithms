/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (mp.has(diff)) {
      return [mp.get(diff), i];
    }

    mp.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9), " -> ", [0, 1]);
console.log(twoSum([3, 2, 4], 6), " -> ", [1, 2]);
console.log(twoSum([3, 3], 6), " -> ", [0, 1]);
