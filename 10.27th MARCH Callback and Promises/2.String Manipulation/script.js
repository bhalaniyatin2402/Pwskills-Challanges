function manipulateString(str, callback) {
  const upperCaseString = str.toUpperCase();
  callback(upperCaseString);
}

function logString(string) {
  console.log(`The manipulated string is ${string}`);
}

manipulateString("hello, world!", logString);
