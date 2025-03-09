function twoSumSorted(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [arr[left], arr[right]];
    else if (sum < target) left++;
    else right--;
  }

  return []; // No pair found
}

console.log(twoSumSorted([1, 2, 3, 4, 6, 8, 9], 10)); // Output: [2, 8]
