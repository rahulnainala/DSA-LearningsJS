let arr = [10, 20, 30, 40, 50];

//Insert at the end (O(1))
arr.push(60);

//Insert at index 2 (O(n))
arr.splice(2, 0, 25);

//Delete the last element (O(1))
arr.pop();

//Delete an element at index 1 (O(n))
arr.splice(1, 1);

console.log(arr);
