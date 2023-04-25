let books = [
  {
    title: "The Corrections",
    author: "Jonathan Franzen",
    publish: 2001,
  },
  {
    title: "Rich dad Poor dad",
    author: "Robert T. Kiyosaki & Sharon Lechte",
    publish: 1997,
  },
  {
    title: "The India Story",
    author: "Bimal Jalal",
    publish: 2022,
  },
  {
    title: "The white Rose",
    author: "Glen Cock",
    publish: 1985,
  },
  {
    title: "The Fishermen",
    author: "Chigozie Obioma",
    publish: 2915,
  },
  {
    title: "Harry potter",
    author: "j. k. rowling",
    publish: 1997,
  },
  {
    title: "Fear",
    author: "Michael Grant",
    publish: 2012,
  },
  {
    title: "Changing india",
    author: "Dr. Manmohan Singh",
    publish: 2018,
  },
];

function getBookTitlesInOrder(books, func) {
  const boolTitles = books.map((e) => e.title);
  func(boolTitles);
}

function arrangeInOrder(titles) {
  titles.sort();
  console.log(titles.join(", "));
}

getBookTitlesInOrder(books, arrangeInOrder);
