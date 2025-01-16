let arrayTest = [10, 20, 30, 40, 50];

// For loop: Iterates using a counter variable.
console.log("For Loop Execution Below");
for (let i = 0; i < arrayTest.length; i++) {
  console.log(arrayTest[i]);
}
console.log("For Loop Ends");

// While loop: Continues while the condition is true.
console.log("While Loop Execution Below");
let i = 0;
while (i < arrayTest.length) {
  console.log(arrayTest[i]);
  i++;
}
console.log("While Loop Ends");

// Do-while loop: Executes the block at least once before checking the condition.
console.log("Do-While Loop Execution Below");
let j = 0;
do {
  console.log(arrayTest[j]);
  j++;
} while (j < arrayTest.length);
console.log("Do-While Loop Ends");

// For-in loop: Iterates over enumerable properties (keys) of an object.
let testObj = { a: 1, b: 2, c: 3, d: "test" };
console.log("For-In Loop Execution Below");
for (let key in testObj) {
  console.log(`${key}: ${testObj[key]}`);
}
console.log("For-In Loop Ends");

// For-of loop: Iterates over values of an iterable (arrays, strings, etc.).
console.log("For-Of Loop Execution Below");
for (let value of arrayTest) {
  console.log(value);
}
console.log("For-Of Loop Ends");

// ForEach loop: Executes a function once for each array element.
console.log("ForEach Loop Execution Below");
arrayTest.forEach((value) => console.log(value));
console.log("ForEach Loop Ends");

// Notes:
// - Use `for` loop for precise control over iterations.
// - Use `while` and `do...while` when the number of iterations is determined by a condition.
// - Use `for...in` for iterating over object properties, not for arrays.
// - Use `for...of` for iterating over values of iterable structures.
// - Use `forEach` for cleaner iteration over arrays, especially when you don't need to break out of the loop early.
