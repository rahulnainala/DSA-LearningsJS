var twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let sum = nums[i] + nums[j];
    console.log(`Checking indices ${i} and ${j}, sum: ${sum}`);
    if (sum === target) {
      return [i, j];
    } else if (sum < target) {
      i++; // Increment left pointer
    } else {
      j--; // Decrement right pointer
    }
  }
  return null; // Return null if no solution is found
};

// let nums = [2, 7, 11, 15];
let nums = [3, 2, 4];
// let target = 9;
let target = 6;

console.log(twoSum(nums, target)); // Output: [0, 1]
