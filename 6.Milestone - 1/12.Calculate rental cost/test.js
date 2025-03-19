const carType = document.getElementById("cartype");
const btn = document.getElementById("btn");
const days = document.getElementById("days");
const answer = document.getElementById("answer");
const carprice = document.getElementById("carprice");

btn.addEventListener("click", () => {
  let totalPrice = answer.value;
  
  if (carType.value === "Economy Car") {
    totalPrice = days.value * 4000;
  } else if (carType.value === "Midsize Car") {
    totalPrice = days.value * 10000;
  } else if (carType.value === "Luxury Car") {
    totalPrice = days.value * 20000;
  }
  answer.value = totalPrice
  carprice.innerHTML = `The price of ${carType.value} for ${days.value} days is <span>${totalPrice} Rs</span>`;

  if (days.value === "") {
    answer.value = "Please Enter Days.";
    carprice.innerHTML = "";
  }
});

carType.addEventListener("input", () => {
    answer.value = "";
    carprice.innerHTML = ''
});
