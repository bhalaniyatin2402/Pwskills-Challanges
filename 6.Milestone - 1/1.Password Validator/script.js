const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const signinBtn = document.getElementById("signibBtn");

signinBtn.addEventListener("click", () => {
  if (password.value == "") {
    console.log("please fill the password");
  } else if (password.value == confirmPassword.value) {
    console.log("Password Matched. Password Validation Successful");
  } else {
    console.log("Password didn't match. Password validation unsuccessful");
  }
});
