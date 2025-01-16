let arr = ["orange", "apple", "banana", "mango"];

//below is the for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//below is the while loop
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

//.map() is an inbuilt function which returns a new array.
const newArr = arr.map((item, index) => {
  return [item, index];
});

//.reduce()
let items = [1, 2, 3, 4, 5];
const newArr2 = items.reduce((prev, item) => {
  return prev + item;
});
console.log(newArr2);

//.find() => returns the first element which satisfies the condition
const res = items.find((item) => {
  return item > 3;
});
console.log(res);
