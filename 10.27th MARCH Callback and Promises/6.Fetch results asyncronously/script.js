async function fetchApi() {
  const respose = await fetch("https://jsonplaceholder.typicode.com/todos");
  const result = await respose.json();
  console.log(result);
}
fetchApi();
