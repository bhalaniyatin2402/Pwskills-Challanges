const image = document.getElementsByTagName("img");
const move = 10;

document.addEventListener("keydown", (x) => {
  const key = x.key.toLowerCase();
  let top = parseInt(image[0].style.top) || 0;
  let left = parseInt(image[0].style.left) || 0;

  switch (key) {
    case "arrowup":
      top -= move;
      break;
    case "arrowdown":
      top += move;
      break;
    case "arrowleft":
      left -= move;
      break;
    case "arrowright":
      left += move;
      break;
    default:
      break;
  }

  image[0].style.top = top + "px";
  image[0].style.left = left + "px";
});
