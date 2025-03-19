const btn = document.getElementById("btn");
const randomnumber = document.getElementById("randomnumber");
const counterDown = document.getElementById("counterDown");

btn.addEventListener("click", () => {
  randomnumber.innerHTML = "";

  // generate random number
  function generateNumber() {
    let result = Math.floor(Math.random() * 100);
    randomnumber.innerHTML = `Random Number is ${result}`;
  }

  // counter down timer
  let number = 3;
  let counterDownTimer = setInterval(() => {
    if (number > 0) {
      counterDown.innerHTML = `Random Number Generate in : ${number} seconds`;
      number--;
    } else {
      clearInterval(counterDownTimer);
      generateNumber();
      counterDown.innerHTML = "";
    }
  }, 1000);
});
