const colorChangerBtn = document.getElementById("button")
const colors = [
  "red",
  "green",
  "pink",
  "orange",
  "gray",
  "black",
  "lightgreen",
]
let colorCount = 0

colorChangerBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = colors[colorCount]

  colorCount++
  if (colorCount === colors.length) {
    colorCount = 0
  }
})
