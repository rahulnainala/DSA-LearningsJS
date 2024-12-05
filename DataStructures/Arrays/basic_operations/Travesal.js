let arr = [10, 20, 30, 40, 50];

//below code traverses the code trough the entire array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//Using forEach (higher-order function)
arr.forEach((value) => console.log(value));
