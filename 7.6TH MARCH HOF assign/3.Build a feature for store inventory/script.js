const items = [
  {
    name: "item1",
    price: 10,
  },
  {
    name: "item2",
    price: 15,
  },
  {
    name: "item3",
    price: 20,
  },
  {
    name: "item4",
    price: 30,
  },
  {
    name: "item5",
    price: 50,
  },
]

const priceInUsd = items.map((x) => {
  const usdPrice = x.price * 80;
  return {
    name: x.name,
    price: usdPrice,
  }
})

console.log(priceInUsd)