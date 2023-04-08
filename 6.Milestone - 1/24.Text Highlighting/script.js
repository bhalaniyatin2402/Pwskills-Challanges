const text = document.getElementById("text");
const word = text.textContent.split(" ");

for (let i = 0; i < word.length; i++) {
  if (word[i].length > 8) {
    word[i] = "<span style='background-color: yellow;'>" + word[i] + "</span>";
  }
}

text.innerHTML = word.join();
