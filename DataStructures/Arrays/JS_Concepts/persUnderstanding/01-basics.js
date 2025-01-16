/**
 * What is an Array in JS?
 * It's a data structure that stores data linearly.
 * It's a collection of elements, where each element can be accessed by its index.
 *
 * [] => Array
 */

// Initialization of an Array
let objectName = []; // We are making objectName an array

console.log(typeof objectName); // Returns "object", since arrays are a type of object in JS

console.log(Array.isArray(objectName)); // Returns true since objectName is an array

// The biggest advantage of JS is that we can store any type of variable in the array

objectName.push(1, 3 / 2, "hello", 4.23, { key: "value" }, true); // We can have any data type in the array
console.log(objectName);

// Hence, sometimes we may face issues with type safety in arrays, and that's why we use TypeScript to define the types explicitly.
