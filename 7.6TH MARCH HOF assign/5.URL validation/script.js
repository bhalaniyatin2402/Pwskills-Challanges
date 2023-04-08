// URL condition = start with http:// or https:// , followed by one or more letters , digit or special character , folloed by dot, followeb by one or more letters
const input = document.getElementById("input");
const urlValidate = document.getElementById("urlmatch");

input.addEventListener("input", () => {
  const condition = /^(https?:\/\/)[\w.-]+(\.[a-zA-Z]+)+[^\s]*$/;
  if (input.value.match(condition)) {
    urlValidate.innerHTML = "Match";
    urlValidate.style.color = "green";
  } else if (input.value == "") {
    urlValidate.innerHTML = "";
  } else {
    urlValidate.innerHTML = "Not Match";
    urlValidate.style.color = "red";
  }
});
