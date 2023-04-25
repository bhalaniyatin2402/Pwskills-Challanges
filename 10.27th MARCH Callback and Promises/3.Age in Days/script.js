function ageInDays(obj, func) {
  const fullName = obj.firstName + " " + obj.lastName;
  const ageInDay = person.ageInYear * 365;
  func(fullName, ageInDay);
}

let person = {
  firstName: "yatin",
  lastName: "bhalani",
  ageInYear: 20
};

function logResult(fullName, ageInDay) {
  console.log(
    `The Person's full name is ${fullName}, and their age in days is ${ageInDay}`
  );
}
ageInDays(person, logResult);
