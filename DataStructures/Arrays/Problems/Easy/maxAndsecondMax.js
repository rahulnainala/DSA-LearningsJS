function secondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let val of arr) {
    if (val > largest) {
      secondLargest = largest;
      largest = val;
    } else if (val > secondLargest && val !== largest) {
      secondLargest = val;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}

let arr1 = [12, 35, 1, 10, 34, 1];
let arr2 = [10, 5, 10];
console.log(secondLargest(arr1)); // Output: 34
console.log(secondLargest(arr2)); // Output: 5
