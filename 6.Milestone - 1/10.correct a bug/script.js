const cart = [
  {
    item: "item1",
    quantity: 4,
  },
  {
    item: "item2",
    quantity: 5,
  },
  {
    item: "item3",
    quantity: 6,
  },
  {
    item: "item4",
    quantity: 9,
  },
  {
    item: "item5",
    quantity: 15,
  },
];

// using map this return only double value
console.log(cart.map((x) => x.quantity * 2));

// using foreach method return the whole array
cart.forEach((x) => {
  x.quantity *= 2;
});
console.log(cart);
