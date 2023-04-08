const cart = ["apple", "banana", "orange", "banana", "pear", "apple"];
const newCart = [];

// using foreach method
cart.forEach((x) => {
  if (newCart.indexOf(x) === -1) {
    newCart.push(x);
  }
});
console.log(newCart);

// using filter
const anotherCart = cart.filter((e, i, arr) => arr.indexOf(e) === i);
console.log(anotherCart);
