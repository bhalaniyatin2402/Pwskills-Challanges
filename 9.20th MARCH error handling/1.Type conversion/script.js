function convertToNumber(str) {
  const ans = Number(str);
  try {
    if (str === undefined || ans === 0) {
      throw Error("empty is input");
    }
    if (isNaN(ans)) {
      throw Error("Invalid Number");
    }
    console.log(ans);
  } catch (err) {
    console.log(err.message);
  }
}

convertToNumber("");
convertToNumber("123");
convertToNumber("abcd");
