// declaring all global variable here
const input = document.getElementById("input");
const addBtn = document.getElementById("addbtn");
const ulTag = document.getElementById("ultag");
const removeBtn = document.getElementById("removebtn");

// items add to list when click +Add button
addBtn.addEventListener("click", () => {
  if (input.value !== "") {
    const newli = document.createElement("li");
    newli.innerHTML = `<p>${input.value}</p>
        <button id="editbtn" onclick="edit(this)">Edit</button>
        <button id="removebtn" onclick="remove(this)">Remove</button>`;
    ulTag.appendChild(newli);
    input.value = "";

    if (ulTag.children[0].id === "emptylist") {
      ulTag.children[0].remove();
    }
  }
});

// remove item from list
function remove(x) {
  x.parentElement.remove();
  if (ulTag.children.length <= 0) {
    const p = document.createElement("p");
    p.id = "emptylist";
    p.textContent = "There is no task. Enter task name and add here";
    ulTag.appendChild(p);
  }
}

// edit list item name
function edit(e) {
  if (e.textContent == "Edit") {
    e.textContent = "Done";
    const inputfield = document.createElement("input");
    inputfield.id = "inputfield";
    inputfield.style.flexGrow = 1;
    inputfield.classList.add("design");
    inputfield.value = e.previousElementSibling.textContent;
    e.previousElementSibling.replaceWith(inputfield);
  } else {
    if (inputfield.value != "") {
      e.textContent = "Edit";
      const taskname = document.createElement("p");
      taskname.id = "taskname";
      taskname.textContent = inputfield.value;
      inputfield.replaceWith(taskname);
    }
  }
}
