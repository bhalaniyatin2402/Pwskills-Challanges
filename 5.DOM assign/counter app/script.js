function increase() {
  if (input.value < 10) {
    input.value++;
  } else {
    alert("value greater than 10 is not allowed");
  }
}

function decrease() {
  if (input.value > 0) {
    input.value--;
  } else {
    alert("negative value is not allowed");
  }
}

function reset() {
  input.value = 0;
}
