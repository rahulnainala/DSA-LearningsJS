var majorityElement = function (nums) {
  let majority = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count > majority) {
      return nums[i];
    }
  }
};

var majorityElement2 = function (nums) {
  let count = 0,
    maj = 0;
  for (let n of nums) {
    if (count === 0) {
      maj = n;
    }
    if (maj === n) {
      count++;
    }
    // else {
    //   count--;
    // }
  }
  return maj;
};
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement2([3, 2, 3]));
