function getPerson(obj) {
  // convert all key of oject to lowercase
  Object.keys(obj).forEach((key) => {
    const k = key.toLowerCase();
    if (k !== key) {
      obj[k] = obj[key];
    }
  });

  // catch % throw error if parameter is not proper
  try {
    if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("age")) {
      throw Error("Invalid Parameter Type");
    }
    console.log(`Name: ${obj.name}, Age: ${obj.age}`);
  } catch (error) {
    console.log(error.message);
  }
}

getPerson({ name: "Mithun", age: 20 });
getPerson({ nAme: "yatin", agE: 21 });
getPerson({ aGE: 5, nAMe: "khushi" });
getPerson({ aGE: 5 });
getPerson(["name", "mithun"]);
