const value = 4;

for (let i = 0; i < value; i++) {
  let pattern = "";
  for (let j = 0; j < value - i; j++) {
    pattern += "*";
  }
  console.log(pattern);
}
