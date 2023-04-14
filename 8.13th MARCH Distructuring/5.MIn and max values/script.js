const num = [3, 8, 12, 4, 19, 15, 5];

function minMaxValue(x) {
  const min = Math.min(...x);
  const max = Math.max(...x);
  return `max:${max}, min:${min}`;
}
console.log(minMaxValue(num));
