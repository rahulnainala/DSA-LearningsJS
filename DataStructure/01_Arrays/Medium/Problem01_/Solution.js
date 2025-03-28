var maxSubArray = function (nums) {
  let maxEndingsHere = 0;
  let maxSoFar = nums[0];

  for (let num of nums) {
    maxEndingsHere += num;

    if (maxEndingsHere > maxSoFar) {
      maxSoFar = maxEndingsHere;
    }

    if (maxEndingsHere < 0) {
      maxEndingsHere = 0;
    }
  }

  return maxSoFar;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
