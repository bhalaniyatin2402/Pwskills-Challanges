const list = ["item 1", "item 2", "item 3", "item 4", "item 5", "item 6"];
const btn = document.getElementById("add");
const listItems = document.getElementById("listitems");

btn.addEventListener("click", function () {
  let items = listItems.childElementCount;
  if (items < list.length) {
    console.log(items);
    listItems.innerHTML += `<li>${list[items]}</li>`
  } else {
    if (items < list.length + 1) {
      listItems.innerHTML += `<li>no more items...</li>`;
    }
  }
});
