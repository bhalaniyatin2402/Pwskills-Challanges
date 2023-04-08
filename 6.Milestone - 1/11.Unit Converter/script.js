// 1 C * (9/5) + 32 = 33.8 F
// (1 F - 32) * 5/9 = -17.22C
const selectTemp = document.getElementById("temperature");
const btn = document.getElementById("btn");
const input = document.getElementById("input");
const answer = document.getElementById("answer");

btn.addEventListener("click", () => {
  if (selectTemp.value === "Fahrenheit to Celsius") {
    answer.value = (input.value - 32) * (5 / 9);
  }
  if (selectTemp.value === "Celsius to Fahrenheit") {
    answer.value = input.value * (9 / 5) + 32;
    input.placeholder = "Celsius";
  }
  if (input.value === "") {
    answer.value = "Please enter a value";
  }
});

selectTemp.addEventListener("input", () => {
  if (selectTemp.value === "Fahrenheit to Celsius") {
    input.placeholder = "Fahrenheit";
    answer.placeholder = "Celsius";
    answer.value = "";
  }
  if (selectTemp.value === "Celsius to Fahrenheit") {
    input.placeholder = "Celsius";
    answer.placeholder = "Fahrenheit";
    answer.value = "";
  }
});
