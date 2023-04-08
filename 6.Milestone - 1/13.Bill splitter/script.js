const dishesOnTable = [
  { dishName: "pizza", pricePerDish: 200 },
  { dishName: "pasta", pricePerDish: 120 },
  { dishName: "panjabi", pricePerDish: 180 },
  { dishName: "burger", pricePerDish: 90 },
];

function BillSplitter(dishes, numberOfPeople) {
  let totalBill = 0;

  dishes.forEach((x) => {
    totalBill += x.pricePerDish;
  });

  // amount pay by each person on table
  let amountPerPerson = Math.round((totalBill / numberOfPeople) * 10) / 10;

  let result = {
    totalBill: totalBill,
    amountPerPerson: amountPerPerson,
  };
  return result;
}

const showBill = BillSplitter(dishesOnTable, 3);
console.log(showBill);
