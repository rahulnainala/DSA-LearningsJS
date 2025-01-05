function findDuplicate(arr) {
  let seen = new Set();
  for (let num of arr) {
    if (seen.has(num)) return num;
    seen.add(num);
  }
  return -1;
}

let arr = [1, 2, 3, 4, 2, 4];

console.log(findDuplicate(arr));
