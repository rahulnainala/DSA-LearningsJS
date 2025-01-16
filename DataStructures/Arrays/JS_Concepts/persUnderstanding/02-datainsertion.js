const firstArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Main Array:", firstArray);

//In the End of the array
firstArray.pop(); //Removes one value from the end
console.log("Pop:", firstArray);
firstArray.push(10); //Adds the value '10' at the end
console.log("Push:", firstArray);

//In the Start of the array
firstArray.shift(); //Removes one value from the start
console.log("Shift Array:", firstArray);
firstArray.unshift(4); //Adds the value '4' at the start
console.log("Unshift Array:", firstArray);

//Splice => Adds / Deletes a element from the array based on index
//.splice(index,delete_count,value);
firstArray.splice(3, 0, 5); //for index 3, delete 0 elements, insert value 5
console.log("Splice Insert:", firstArray);

firstArray.splice(3, 1); //for index 3, delete 1 element from the index
console.log("Splice Delete:", firstArray);

firstArray.splice(5, 1, 2); //for index 5, delete 1 element from index and insert value 2
console.log("Splice Delete Insert:", firstArray);
