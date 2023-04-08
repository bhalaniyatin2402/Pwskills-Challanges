const input = document.getElementById("input");
const buttons = document.getElementsByTagName("button");
const calc = "";

const Btn = Array.from(buttons);
Btn.forEach((x) => {
  x.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      try {
        calc = eval(input.value);
        input.value = calc;
      } catch (error) {
        alert("invalid operator");
        calc = "";
        input.value = calc;
      }
    } else if (e.target.innerHTML == "c") {
      calc = "";
      input.value = calc;
    } else {
      calc += e.target.innerHTML;
      input.value = calc;
    }
  });
});
