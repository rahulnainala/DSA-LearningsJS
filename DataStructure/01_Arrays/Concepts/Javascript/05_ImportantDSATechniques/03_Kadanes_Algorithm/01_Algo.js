function maxSubArray(arr) {
  let maxEndingsHere = 0;
  let maxSoFar = arr[0];

  for (let num of arr) {
    maxEndingsHere += num;

    if (maxEndingsHere > maxSoFar) {
      maxSoFar = maxEndingsHere;
    }

    if (maxEndingsHere < 0) {
      maxEndingsHere = 0;
    }
  }

  return maxSoFar;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//Time Complexity => O(n) - since each element is processed only once
