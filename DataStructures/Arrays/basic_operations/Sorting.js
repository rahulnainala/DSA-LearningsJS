let arr = [20, 10, 5, 60, 12, 50, 21, 31, 1];
let arr2 = [20, 10, 5, 60, 12, 50, 21, 31, 1];

//using built in .sort function
arr.sort((a, b) => a - b); //Ascending
console.log(arr);

//using custom sorting
arr2.sort((a, b) => b - a); //Descending
console.log(arr2);
