const firstArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Main Array:", firstArray);

// Removing the last element of the array
firstArray.pop(); // Removes the last element
console.log("Pop (Remove last):", firstArray);

// Adding an element to the end of the array
firstArray.push(10); // Adds '10' at the end
console.log("Push (Add at end):", firstArray);

// Removing the first element of the array
firstArray.shift(); // Removes the first element
console.log("Shift (Remove first):", firstArray);

// Adding an element to the start of the array
firstArray.unshift(4); // Adds '4' at the start
console.log("Unshift (Add at start):", firstArray);

// Using splice to insert elements into the array
firstArray.splice(3, 0, 5); // Inserts '5' at index 3, deletes 0 elements
console.log("Splice Insert (index 3, add 5):", firstArray);

// Using splice to delete an element from the array
firstArray.splice(3, 1); // Deletes 1 element at index 3
console.log("Splice Delete (index 3):", firstArray);

// Using splice to delete and insert elements simultaneously
firstArray.splice(5, 1, 2); // Deletes 1 element at index 5 and inserts '2'
console.log("Splice Delete Insert (index 5, add 2):", firstArray);

// Notes:
// - `pop()` removes the last element.
// - `push(value)` adds a new element to the end.
// - `shift()` removes the first element.
// - `unshift(value)` adds a new element to the start.
// - `splice(index, deleteCount, ...items)` can insert, delete, or replace elements in an array.
