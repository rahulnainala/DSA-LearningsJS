/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  nums.sort();
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      console.log(nums[i], "nums");
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums);
  return nums.length;
};

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let value = 2;
console.log(removeElement(arr, value));
