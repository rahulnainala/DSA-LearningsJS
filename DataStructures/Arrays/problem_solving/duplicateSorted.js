/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  console.log(nums);
  return nums.length;
};

console.log(removeDuplicates([-1, 0, 0, 0, 0, 3, 3]));
