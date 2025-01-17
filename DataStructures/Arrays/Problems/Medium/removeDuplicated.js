/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;
  let count = 1;
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[index] = nums[i];
      index++;
      count = 1;
    } else if (count < 2) {
      nums[index] = nums[i];
      index++;
      count++;
    }
  }
  return index;
};

let nums = [1, 1, 1, 2, 2, 3];
console.log(removeDuplicates(nums)); // Output: 5, nums will be modified to [1, 1, 2, 2, 3]
console.log(nums);
