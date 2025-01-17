/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  let size = nums.length;
  k = k % size; // Ensure k is within the bounds of the array length
  if (k > 0) {
    const rotated = nums.splice(size - k, k); // Remove the last k elements
    nums.unshift(...rotated); // Add the removed elements to the front
  }
};

let nums = [1, 2];
let k = 3;
rotate(nums, k);
console.log(nums);
