const list = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"];
// we can also use currindex. this is run parallel to list item
// let currIndex = 0

function additem() {
  const listitems = document.getElementById("listitems");
  if (listitems.childElementCount === list.length + 1) {
    return false;
  } else if (listitems.childElementCount >= list.length) {
    listitems.innerHTML += "<li>no more items</li>";
    return;
  }

  const item = list[listitems.childElementCount];
  listitems.innerHTML += "<li>" + item + "</li>";
  // currIndex++
}
