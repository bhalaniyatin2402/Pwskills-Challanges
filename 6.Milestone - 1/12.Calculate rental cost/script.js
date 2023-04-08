const carType = document.getElementById("cartype");
const btn = document.getElementById("btn");
const days = document.getElementById("days");
const answer = document.getElementById("answer");
const carprice = document.getElementById("carprice");

btn.addEventListener("click", () => {
  if (carType.value === "Economy Car") {
    answer.value = days.value * 4000;
    carprice.innerHTML = `The price of ${carType.value} for ${days.value} days is <span>${answer.value} Rs</span>`;
  }
  if (carType.value === "Midsize Car") {
    answer.value = days.value * 10000;
    carprice.innerHTML = `The price of ${carType.value} for ${days.value} days is <span>${answer.value} Rs</span>`;
  }
  if (carType.value === "Luxury Car") {
    answer.value = days.value * 20000;
    carprice.innerHTML = `The price of ${carType.value} for ${days.value} days is <span>${answer.value} Rs</span>`;
  }
  if (days.value === "") {
    answer.value = "Please Enter Days.";
    carprice.innerHTML = "";
  }
});

carType.addEventListener("input", () => {
  if (carType.value === "Economy Car") {
    answer.value = "";
  }
  if (carType.value === "Midsize Car") {
    answer.value = "";
  }
  if (carType.value === "Luxury Car") {
    answer.value = "";
  }
});
