function maxSubArray(arr) {
  let maxEndingHere = 0;
  let maxSoFar = arr[0];
  let start = 0,
    end = 0,
    tempStart = 0;
  for (let i = 0; i < arr.length; i++) {
    maxEndingHere += arr[i];

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      start = tempStart;
      end = i;
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
      tempStart = i + 1;
    }
  }
  console.log(`Maximum Sum: ${maxSoFar}`);
  console.log(`Subarray: ${arr.slice(start, end + 1)}`);
}
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//Time Complexity => O(n)
