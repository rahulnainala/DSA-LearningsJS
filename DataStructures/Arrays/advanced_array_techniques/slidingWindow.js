function maxSumSubarray(arr, k) {
  let maxSum = 0,
    windowSum = 0;

  //Calculate the sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
    console.log(windowSum);
  }

  maxSum = windowSum;
  //Slide the window
  for (let i = k; i < arr.length - 1; i++) {
    windowSum += arr[i] - arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(maxSumSubarray(arr, 7));
