function prefixSum(arr) {
  let prefix = Array(arr.length).fill(0);
  prefix[0] = arr[0];

  //Build prefix sum array
  for (i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  //function to calculate range sum
  function rangeSum(L, R) {
    if (L === 0) return prefix[R];
    return prefix[R] - prefix[L - 1];
  }
  console.log("Prefix Sum Array:", prefix);
  console.log("Sum from index 1 to 3:", rangeSum(1, 3));
}
prefixSum([2, 4, 6, 8, 10]);
