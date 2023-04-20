let products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

function filterByCategory(arr) {
  return function (catg) {
    return arr.filter((e) => e.category.toLowerCase() === catg.toLowerCase());
  };
}

const clothingProduct = filterByCategory(products)("clothing");
console.log(clothingProduct);
