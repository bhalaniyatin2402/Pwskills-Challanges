async function fetchApi() {
  const respose = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const result = await respose.json();
  console.log(result);
}
fetchApi();
