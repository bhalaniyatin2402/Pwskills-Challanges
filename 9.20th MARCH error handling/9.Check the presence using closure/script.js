function numberChecker(arr) {
  return function (num) {
    return arr.includes(num);
  };
}

const array = [1, 4, 7, 13, 9];
const checkNum = numberChecker(array);

console.log(checkNum(7));
console.log(checkNum(3));
