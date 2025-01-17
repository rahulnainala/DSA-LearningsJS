const testArray = [1, 4, 3, 6, 8, 12];
console.log("Test Array:", testArray);

// .map() function: Creates a new array by applying a function to each element of the original array.
const mappedArray = testArray.map((index) => index * 2); // Multiplies each element by 2
console.log("Mapped Array:", mappedArray); // Logs: [2, 8, 6, 12, 16, 24]

// .filter() function: Creates a new array with elements that pass a given condition.
const filteredArray = testArray.filter((value) => value % 2 === 0); // Keeps only even numbers
console.log("Filtered Array:", filteredArray); // Logs: [4, 6, 8, 12]

// .reduce() function: Reduces the array to a single value by applying a function to each element.
const sum = testArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log("Sum using reduce:", sum); // Logs: 34

// .find() function: Returns the first element that satisfies the provided condition.
const foundElement = testArray.find((value) => value > 5);
console.log("First element greater than 5:", foundElement); // Logs: 6

// .some() function: Checks if at least one element in the array meets the condition.
const hasEven = testArray.some((value) => value % 2 === 0);
console.log("Array has an even number:", hasEven); // Logs: true

// .every() function: Checks if all elements in the array meet the condition.
const allPositive = testArray.every((value) => value > 0);
console.log("All elements are positive:", allPositive); // Logs: true

// .includes() function: Checks if an array contains a specific element.
const includesFour = testArray.includes(4);
console.log("Array includes 4:", includesFour); // Logs: true

// .sort() function: Sorts the elements of an array in place.
const sortedArray = [...testArray].sort((a, b) => a - b); // Sorting numerically in ascending order
console.log("Sorted Array:", sortedArray); // Logs: [1, 3, 4, 6, 8, 12]

// Notes:
// - `.reduce()` is used to aggregate array values into a single output, such as summing numbers.
// - `.find()` returns the first element that satisfies the condition or `undefined` if none do.
// - `.some()` returns `true` if at least one element satisfies the condition, otherwise `false`.
// - `.every()` returns `true` if all elements satisfy the condition, otherwise `false`.
// - `.includes()` checks for the presence of a specific value in the array.
// - `.sort()` sorts the array elements. Be cautious as it modifies the original array.
