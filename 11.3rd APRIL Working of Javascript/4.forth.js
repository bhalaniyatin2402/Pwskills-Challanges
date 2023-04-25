// first time var shown undefined because we console before the assigning value
// second var show output becaue var has a global scope
// but let and const show reference error because this variable has local scope

console.log(varOne); // reference error
console.log(varTwo); // undefined
console.log(varThree); // reference error

{
  let varOne = "this is first variable";
  var varTwo = "this is second variable";
  const varThree = "this is third variable";
}

console.log(varOne); // reference error
console.log(varTwo); // 'this is second variable'
console.log(varThree); // reference error
