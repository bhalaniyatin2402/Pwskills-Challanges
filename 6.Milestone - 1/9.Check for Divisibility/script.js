const arr = [3, 6, 9, 12, 1, 2, 5, 7, 13, 14, 65, 15];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    continue
  }
  if (arr[i] % 3 == 0) {
    newArr.push(arr[i]);
  }
}
console.log(newArr);
