// Concat
// Concat is used to merge two or more arrays.
// This returns a new array instead of changing any array.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4, 6, 8, 12];
let arr3 = ["test", "this", "array"];
let arr4 = arr1.concat(arr2, arr3);
// The above arr4 merges arr2 and arr3 into arr1 and gives us a new array called arr4
console.log("Concatenated Array:", arr4);
// Output: [1, 2, 3, 4, 5, 2, 4, 6, 8, 12, "test", "this", "array"]

// Slice
// Slice is used to extract a section of an array and returns a new array.
let arr5 = arr1.slice(0, 2); // Extracts elements from index 0 to 2 (not including 2)
console.log("Sliced Array:", arr5);
// Output: [1, 2]

// Fill
// Fill is used to fill all the elements of an array from a start index to an end index with a static value.
let arr6 = arr3.fill("data"); // Replaces all elements in arr3 with "data"
console.log("Filled Array:", arr6);
// Output: ["data", "data", "data"]

// FindIndex
// FindIndex returns the index of the first element in the array that satisfies the provided testing function.
const index = arr2.findIndex((item) => item === 8); // Finds the index of the value 8 in arr2
console.log("Index of 8 in arr2:", index);
// Output: 3

// Flat
// Flat creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
let flatArray = nestedArray.flat(2); // Flattens the nested array up to a depth of 2
console.log("Flattened Array:", flatArray);
// Output: [1, 2, 3, 4, 5, 6, 7]

// Reverse
// Reverse reverses the array in place.
let reversedArr = arr1.reverse();
console.log("Reversed Array:", reversedArr);
// Output: [5, 4, 3, 2, 1]

// Sort
// Sort sorts the elements of an array in place and returns the sorted array.
let unsortedArr = [4, 2, 5, 1, 3];
let sortedArr = unsortedArr.sort((a, b) => a - b); // Sorts the array in ascending order
console.log("Sorted Array:", sortedArr);
// Output: [1, 2, 3, 4, 5]

//Concat: Merges multiple arrays into a new array.
//Slice: Returns a shallow copy of a portion of the array.
//Fill: Fills all elements with a static value.
//FindIndex: Finds the index of the first element satisfying a condition.
//Flat: Flattens nested arrays to a specified depth.
//Reverse: Reverses the array in place.
//Sort: Sorts the array elements.
