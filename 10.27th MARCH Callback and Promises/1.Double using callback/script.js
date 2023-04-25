function doubleNumber(arr, callback) {
  let result = [];
  arr.forEach((e) => result.push(callback(e)));
  return result;
}

function doubleNum(n) {
  return n * 2;
}

let numbers = [1, 2, 3, 4, 5];
let outputArray = doubleNumber(numbers, doubleNum);
console.log(outputArray)