//reversing an Array

function reverseArray(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]; //Swap
    left++;
    right--;
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(reverseArray(arr));
