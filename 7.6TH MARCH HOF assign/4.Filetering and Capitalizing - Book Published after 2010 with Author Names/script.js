const books = [
  {
    name: "The Corrections",
    author: "Jonathan Franzen",
    publish: 2001,
  },
  {
    name: "Rich dad Poor dad",
    author: "Robert T. Kiyosaki & Sharon Lechte",
    publish: 1997,
  },
  {
    name: "The India Story",
    author: "Bimal Jalal",
    publish: 2022,
  },
  {
    name: "The white Rose",
    author: "Glen Cock",
    publish: 1985,
  },
  {
    name: "The Fishermen",
    author: "Chigozie Obioma",
    publish: 2915,
  },
  {
    name: "Harry potter",
    author: "j. k. rowling",
    publish: 1997,
  },
  {
    name: "Fear",
    author: "Michael Grant",
    publish: 2012,
  },
  {
    name: "Changing india",
    author: "Dr. Manmohan Singh",
    publish: 2018,
  },
];

const booKBefore2010 = books.filter((x) => x.publish < 2010);

const CapitalizeAuthor = booKBefore2010.map((e) => {
  let result = {
    name: e.name,
    author: e.author.toUpperCase(),
    publish: e.publish,
  };
  return result;
});

console.log(CapitalizeAuthor);
