arr = [10, 20, 30, 40, 50];

//linear search
let index = arr.indexOf(30);
console.log("Index of value 30 :", index);

//binary search
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; //target not found
}

console.log("Index of value 40 is", binarySearch(arr, 40));
