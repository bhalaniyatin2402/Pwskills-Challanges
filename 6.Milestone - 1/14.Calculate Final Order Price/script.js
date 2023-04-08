const cart = [
  {
    item: "product1",
    price: 25,
    quantity: 2,
  },
  {
    item: "product2",
    price: 700,
    quantity: 1,
  },
  {
    item: "product3",
    price: 60,
    quantity: 4,
  },
  {
    item: "product4",
    price: 199,
    quantity: 1,
  },
];

function calculateTotalCost(cart) {
  let totalCost = 0;
  let totalQuantity = 0;
  cart.forEach((x) => {
    totalCost += x.price * x.quantity;
    totalQuantity += x.quantity;
  });
  let result = {
    totalCost: totalCost,
    totalQuantity: totalQuantity,
  };
  return result;
}

const customerCart = calculateTotalCost(cart);
console.log(customerCart);
