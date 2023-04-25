function GreetingPromise(name) {
  return new Promise(function (resolve, reject) {
    if (typeof name == "string") {
      resolve(`Hello, ${name}!`);
    } else {
      reject("Invalid Input Please Enter Correct Name");
    }
  });
}

GreetingPromise("yatin")
  .then((e) => console.log(e))
  .catch((e) => console.log(e));
