function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base case: already sorted
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // Sort left half
  let right = mergeSort(arr.slice(mid)); // Sort right half
  return merge(left, right);
}

function merge(left, right) {
  let sortedArray = [],
    i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }
  // Append remaining elements
  return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90]));
