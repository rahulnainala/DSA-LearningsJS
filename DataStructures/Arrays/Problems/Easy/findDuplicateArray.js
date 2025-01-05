var containsDuplicate = function (nums) {
  let i = 0;
  let j = 0;
  let count = 0;
  for (i; i < nums.length; i++) {
    let target = nums[i];
    console.log("tttt Target", target);
    for (j = 0; j < i; j++) {
      if (nums[j] === target) {
        count++;
      }
    }
  }
  if (count >= 1) {
    return true;
  } else return false;
};

const containsDuplicate1 = (nums) => {
  nums.sort((a, b) => b - a);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};
console.log(containsDuplicate1([1, 2, 3, 4]));
