fetch("https://jsonplaceholder.typicode.com/posts/123456789")
  .then((e) => {
    if (!e.ok) {
      throw new Error("there is some problem in API");
    }
    return e;
  })
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log(err.message);
  })
