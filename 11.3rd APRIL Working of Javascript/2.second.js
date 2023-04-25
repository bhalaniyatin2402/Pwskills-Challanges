// we can't call function expression before declaring function expression
// because function expression is stored in a variable and at the time of memory execution var iable named 'multiplyNumbers' is undefinded
// so error occured and show multiplyNumbers is not a function

multiplyNumbers(5, 6);

const multiplyNumbers = function (num1, num2) {
  let multiplication = num1 * num2;
  console.log(multiplication);
};
