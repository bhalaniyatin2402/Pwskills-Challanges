const person = {
  name: "mithun",
  age: 21,
  address: {
    street: "BB, Block B, Industrail Area.",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
  },
};

function extractNameAndStreet(e) {
  const {
    name,
    address: { street },
  } = e;
  return { name, street };
}

console.log(extractNameAndStreet(person));

// for direct access using the name and steet words
const { name, street } = extractNameAndStreet(person);
console.log(name);
console.log(street);
