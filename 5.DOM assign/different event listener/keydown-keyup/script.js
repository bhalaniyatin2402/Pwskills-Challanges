const keyupdown = document.getElementById("keyupdown");

document.addEventListener("keyup", (e) => {
  keyupdown.innerText = e.key + " is Key UP";
  keyupdown.style.color = "green";
});

document.addEventListener("keydown", (e) => {
  keyupdown.innerText = e.key + " is DOWN Key";
  keyupdown.style.color = "red";
});
