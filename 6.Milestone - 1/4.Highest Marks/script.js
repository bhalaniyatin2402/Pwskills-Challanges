let marks = [
  {
    name: "student1",
    mark: 78,
  },
  {
    name: "student2",
    mark: 90,
  },
  {
    name: "student3",
    mark: 69,
  },
  {
    name: "student4",
    mark: 96,
  },
  {
    name: "student5",
    mark: 64,
  },
];

let highestMark = marks.reduce((numOne, numTwo) =>
  numOne.mark > numTwo.mark ? numOne : numTwo
)
console.log(highestMark);
