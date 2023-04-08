let inputOne = document.getElementById("input1");
let inputTwo = document.getElementById("input2");
let colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", () => {
  switch (true) {
    case inputOne.value == "red" && inputTwo.value == "blue":
      console.log("purple");
      break;
    case inputOne.value == "red" && inputTwo.value == "yellow":
      console.log("orange");
      break;
    case inputOne.value == "blue" && inputTwo.value == "yellow":
      console.log("green");
      break;
    case inputOne.value == "blue" && inputTwo.value == "red":
      console.log("purple");
      break;
    case inputOne.value == "yellow" && inputTwo.value == "red":
      console.log("orange");
      break;
    case inputOne.value == "yellow" && inputTwo.value == "blue":
      console.log("green");
      break;
    default:
      console.log("Invalid color combination");
      break;
  }
});
