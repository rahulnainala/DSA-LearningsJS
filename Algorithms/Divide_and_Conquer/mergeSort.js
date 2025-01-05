function merge(left, right) {
  let sortedArray = [];
  let i = 0,
    j = 0;

  // Compare elements from both arrays and merge them in sorted order
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }
  // Append remaining elements of the left array
  while (i < left.length) {
    sortedArray.push(left[i]);
    i++;
  }

  // Append remaining elements of the right array
  while (j < right.length) {
    sortedArray.push(right[j]);
    j++;
  }

  return sortedArray;
}

function mergeSort(array) {
  // Base case: single element or empty array is already sorted
  if (array.length <= 1) {
    return array;
  }

  // Divide the array into two halves
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  // Recursively sort the two halves and merge them
  return merge(mergeSort(left), mergeSort(right));
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", array);

const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);

/**
 * Divide: The array is recursively divided into two halves until each sub-array contains only one element.
 * Conquer: These smaller arrays are merged in sorted order using the merge function.
 * Combine: The sorted halves are combined to produce the final sorted array.
 */
