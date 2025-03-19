const image = document.getElementById('image')
const move = 10;

document.addEventListener("keydown", (x) => {
  const key = x.key.toLowerCase();
  let top = parseInt(image.style.top) || 0;
  let left = parseInt(image.style.left) || 0;

  switch (key) {
    case "arrowup":
      if(top < 0) {
        return false
      } else {
        top -= move;
      }
      break;
    case "arrowdown":
      top += move;
      break;
    case "arrowleft":
      if(left < 0) {
        return false
      } else {
        left -= move;
      }
      break;
    case "arrowright":
      left += move;
      break;
    default:
      break;
  }

  image.style.top = top + "px";
  image.style.left = left + "px";
});
