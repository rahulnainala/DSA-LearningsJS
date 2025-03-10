var getConcatenation = function (nums) {
  let returnArray = new Array(2 * nums.length);
  for (let i = 0; i < nums.length; i++) {
    returnArray[i] = nums[i];
    returnArray[nums.length + i] = nums[i];
  }
  console.log(returnArray.length);
  return returnArray;
};

console.log(getConcatenation([1, 2, 1]));
console.log(getConcatenation([1, 3, 2, 1]));
