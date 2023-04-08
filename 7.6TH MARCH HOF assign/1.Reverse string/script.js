const input = "yatin";

function reverseString(string) {
  return string.split("").reverse().join("");
}

function printString() {
  let result = reverseString(input);
  console.log(result);
}

setTimeout(printString, 2000);
