let input = document.getElementById("name");
let btn = document.querySelector("button");
let p = "";

// first method - using for loop
input.addEventListener("input", () => {
  let words = input.value.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  input.value = words.join(" ");
});

// second method - using forEach loop
btn.addEventListener("click", () => {
  let words = input.value.split(" ");
  let newWords = words.map((e) => e.charAt(0).toUpperCase() + e.slice(1));
  input.value = newWords.join(" ");
})