const btn = document.getElementById("btn");
const randomnumber = document.getElementById("randomnumber");
const counterDown = document.getElementById("counterDown");

btn.addEventListener("click", () => {
  btn.setAttribute("disabled", true);
  randomnumber.innerHTML = "";

  //generate random number
  function generateNumber() {
    let number = Math.floor(Math.random() * 100);
    randomnumber.innerHTML = `random Number is : ${number}`;
  }

  // counter down timer
  let number = 3;
  const counterDownTimer = setInterval(() => {
    if (number > 0) {
      counterDown.innerHTML = `random number generate in ${number} seconds`;
      number--;
    } else {
      clearTimeout(counterDownTimer);
      generateNumber();
      counterDown.innerHTML = "";
      btn.removeAttribute("disabled", true);
    }
  }, 1000);
});
