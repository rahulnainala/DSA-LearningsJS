var runningSum = function (nums) {
  let prefix = Array(nums.length).fill(0);
  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }
  console.log(prefix);
};

runningSum([1, 2, 3, 4]);
runningSum([1, 1, 1, 1, 1]);
runningSum([3, 1, 2, 10, 1]);
