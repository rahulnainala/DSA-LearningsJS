function minSubArrayLen(target, arr) {
  let left = 0,
    windowSum = 0,
    minLength = Infinity;

  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right];

    while (windowSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      windowSum -= arr[left];
      left++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
