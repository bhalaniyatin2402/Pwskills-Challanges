// const fetchApiBtn = document.getElementById("fetchbtn");

// fetchApiBtn.addEventListener("click", () => {
//   async function fetchData() {
//     try {
      const response = fetch("https://sonplaceholder.typicode.com/posts");
      const result =  response.json();
      console.log(result);
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
//   fetchData();
// });
