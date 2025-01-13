// Spread and Rest Operators

const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

// To create a third array by combining both the above arrays
const finalNums = [nums, nums2];
// We get [ [1, 2, 3], [4, 5, 6, 7] ] because we're adding two arrays as elements
console.log(finalNums);

// Instead, we can use the Spread Operator (...) to spread the elements of the arrays
const finalNums2 = [...nums, ...nums2];
// This combines both arrays into a single array: [1, 2, 3, 4, 5, 6, 7]
console.log(finalNums2);

// Function to demonstrate the Rest Operator
function sum(numbers) {
  return numbers;
}

console.log(sum(nums, nums2));
// Output: [1, 2, 3] because `sum` accepts only one parameter and treats it as an array

// A better approach using the Rest Operator
function sum1(...numbers) {
  return numbers;
}
console.log(sum1(...nums, ...nums2));
// Output: [1, 2, 3, 4, 5, 6, 7] because `sum1` collects all arguments into an array
