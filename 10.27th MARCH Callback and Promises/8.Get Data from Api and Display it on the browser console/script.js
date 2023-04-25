const fetchApiBtn = document.getElementById("fetchbtn");

fetchApiBtn.addEventListener("click", () => {
  async function fetchData() {
    try {
      const response = await fetch("https://sonplaceholder.typicode.com/posts");
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  }
  fetchData();
});
