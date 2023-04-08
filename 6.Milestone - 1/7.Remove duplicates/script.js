const cart = [
  {
    fruit: "apple",
    price: 100,
  },
  {
    fruit: "banana",
    price: 30,
  },
  {
    fruit: "orange",
    price: 80,
  },
  {
    fruit: "apple",
    price: 100,
  },
  {
    fruit: "pear",
    price: 50,
  },
  {
    fruit: "guava",
    price: 60,
  },
  {
    fruit: "pear",
    price: 50,
  },
];

const newCart = [];
const uniqueCart = cart.filter((e) => {
  const cartInclude = newCart.includes(e.fruit);
  if (cartInclude) {
    return false;
  } else {
    newCart.push(e.fruit);
    return true;
  }
});
console.log(uniqueCart);
