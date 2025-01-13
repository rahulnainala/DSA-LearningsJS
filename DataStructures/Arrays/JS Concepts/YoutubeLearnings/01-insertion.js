//Arrays -declaration

//first way to declaring an array
let arr = new Array();

//second way of creating an array
let arr2 = [];

/**
 * to add an element to an array
 * 1.when initalisation
 * 2.after creating of an Array
 */

//1.when initalisation

let arr3 = ["apple", "banana", "mango"];
//to access the elements inside an array
// arr3[0] => apple
// arr3[1] => banana
// arr3[2] => mango
console.log(arr3[0]);
//to see the length of an array
console.log(arr3.length);

//2. After creating an Array
/**
 *  Push => Add and element at the end
 *  Pop => Remove the end element
 *  Unshift => Add the element at the top of the array
 *  Shift => Remove element at the to of the array
 */

let arr4 = ["apple", "banana", "mango"];

arr4.push("orange"); //appends at the end
console.log("Push:", arr4);

arr4.unshift("Dragonfruit"); //appends at the start of the array
console.log("Unshift:", arr4);

arr4.pop(); //removes last element from the array => orange
console.log("Pop:", arr4);

arr4.shift(); //removes first element from the array => dragonfruit
console.log("Shift:", arr4);
