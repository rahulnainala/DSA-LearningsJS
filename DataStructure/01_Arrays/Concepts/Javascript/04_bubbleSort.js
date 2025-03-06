function bubbleSort(arr) {
  let n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    //if no swaps happened, array is already sorted
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([10, 24, 122, 42, 67, 53, 1, 56, 32]));
