/**
 * What is an Array in JavaScript?
 * It's a data structure that stores elements in a linear order.
 * Each element can be accessed by its index (position in the array).
 *
 * Syntax: [] => Array
 */

// Initializing an array
let objectName = []; // Create an empty array and assign it to objectName

console.log(typeof objectName); // Returns "object", because arrays are a type of object in JavaScript

console.log(Array.isArray(objectName)); // Returns true since objectName is an array

// JavaScript arrays can hold elements of any data type, making them highly flexible
objectName.push(1, 3 / 2, "hello", 4.23, { key: "value" }, true); // Mixing different data types in the same array
console.log(objectName); // Logs the array with mixed types: [ 1, 1.5, 'hello', 4.23, { key: 'value' }, true ]

// Example of why using TypeScript (or strict type systems) can be helpful to ensure type safety in arrays
// In JS, we can store any type of value in an array, which can sometimes lead to type-related bugs.

// Notes:
// - Arrays are a special type of object in JavaScript. They allow you to store multiple values in a single variable.
// - You can mix different data types in an array, such as numbers, strings, objects, booleans, etc.
// - Using TypeScript allows you to enforce type constraints, improving type safety in arrays.
