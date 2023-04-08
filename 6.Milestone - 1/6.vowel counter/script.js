const input = document.getElementById("input");
const countBtn = document.getElementById("btn");
const vowelCountDisplay = document.getElementById("count");

countBtn.addEventListener("click", () => {
  let vowelCount = 0;
  const inputValue = input.value.toLowerCase().split("");
  if (inputValue == "") {
    return (vowelCountDisplay.innerHTML = `Input is Empty`);
  }
  inputValue.forEach((e) => {
    if (e.match(/[aeiou]/)) {
      vowelCount++;
    }
  });
  vowelCountDisplay.innerHTML = `${input.value} contain ${vowelCount} vowels`;
});
