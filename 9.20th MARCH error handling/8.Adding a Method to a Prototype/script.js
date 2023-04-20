Object.prototype.printDetails = function () {
  console.log(`Hello, the student is ${this.name}`);
};

class Student {
  constructor(n) {
    this.name = n;
  }
}

const student = new Student("yatin")
student.printDetails()