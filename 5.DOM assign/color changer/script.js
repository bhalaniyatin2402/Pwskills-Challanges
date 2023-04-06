const changeColor = () => {
  const val = "0123456789ABCDEF";
  let conc = "#";
  for (let i = 0; i < 6; i++) {
    conc += val[Math.floor(Math.random() * 16)];
  }
  return conc;
};

function randomColorChange() {
  document.body.style.backgroundColor = changeColor();
}

console.log(changeColor());
