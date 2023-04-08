// declaring all global variable here
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const checkValidity = document.getElementById("valid");
const passwordvalid = document.getElementById("passwordvalid");

// showing at  time of click
submit.addEventListener("click", () => {
  if (email.value.includes !== "@" && password.value.length < 8) {
    checkValidity.textContent = "Invalid email or password";
    checkValidity.style.color = "red";
  } else {
    valid.textContent = "Valid email and password";
    valid.style.color = "green";
  }
});

// showing at time of input
password.addEventListener("input", () => {
  if (password.value.length < 8) {
    passwordvalid.textContent = "minimum 8 digit required";
    passwordvalid.style.color = "red";
  } else {
    passwordvalid.textContent = "";
  }
});
