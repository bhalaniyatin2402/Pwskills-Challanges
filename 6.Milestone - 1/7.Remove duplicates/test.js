let cart = [
  { item: "apple", price: 90 },
  { item: "banana", price: 100 },
  { item: "orange", price: 65 },
  { item: "banana", price: 100 },
  { item: "apple", price: 90 },
];

let uniqueItem = [];

let newCart = cart.filter((e) => {
  if (!uniqueItem.includes(e.item)) {
    uniqueItem.push(e.item);
    return e;
  }
});

console.log(newCart);
