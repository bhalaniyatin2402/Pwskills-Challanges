const string = "My name is bhalani yatin.my father name is dineshbhai,my village name is dhava";

function wordCountOccur(string) {
  string = [...string];
  let words = string.map((s) => s.replace(".", " ").replace(",", " "));
  words = words.join("").split(" ");
  const wordMap = new Map();

  words.map((e) => {
    e = e.toLowerCase();
    if (wordMap.has(e)) {
      wordMap.set(e, wordMap.get(e) + 1);
    } else {
      wordMap.set(e, 1);
    }
  });
  return wordMap;
}
console.log(wordCountOccur(string))