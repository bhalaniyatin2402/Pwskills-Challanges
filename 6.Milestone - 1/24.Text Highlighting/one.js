let text = document.getElementById("text");

let newText = [];

text.innerHTML.split(" ").map((word) => {
  if (word.length > 8) {
    newText.push(`<span style="background-color: yellow;">${word}</span>`);
  } else {
    newText.push(word);
  }
});

text.innerHTML = newText.join(" ");
