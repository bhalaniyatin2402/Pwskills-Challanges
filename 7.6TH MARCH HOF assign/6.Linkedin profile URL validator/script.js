// URL condition = start with http:// or https:// , followed by one or more letters , digit or special character , folloed by dot, followeb by one or more letters
const input = document.getElementById("input");
const urlValidate = document.getElementById("urlmatch");

input.addEventListener("input", () => {
  const condition =
    /[(https:\/\/www\.linkedin.com)]{20}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)+/g;
  if (input.value.match(condition)) {
    urlValidate.innerHTML = "This is a linkedIn URL";
  } else if (input.value == "") {
    urlValidate.innerHTML = "";
  } else {
    urlValidate.innerHTML = "This is Not a LinkedIn URL";
  }
});
