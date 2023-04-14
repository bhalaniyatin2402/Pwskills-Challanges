const arr = [1, 2, 3, 4, 5, 9, 11, 15, 25, 6];

function anotherArr(e) {
  const [one, two, ...remainingAll] = e;
  const last = remainingAll.pop();
  return [one, two, last];
}
console.log(anotherArr(arr));
