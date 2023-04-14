const a = 5;
const b = 10;

const swapValue = (a, b) => ([a, b] = [b, a]);
console.log(a);
console.log(b);
console.log(swapValue(a, b));
