async function combineApis() {
  const [todoApi, postsApi] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1"),
    fetch("https://jsonplaceholder.typicode.com/posts/1"),
  ]);

  const todo = await todoApi.json();
  const post = await postsApi.json();

  return { todo, post };
}

combineApis().then((e) => console.log(e));
