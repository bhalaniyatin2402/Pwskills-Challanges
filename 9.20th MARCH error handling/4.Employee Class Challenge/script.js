class Employee {
  constructor(n, p, s) {
    this.name = n;
    this.position = p;
    this.salary = s;
  }

  getSalary() {
    return this.salary;
  }
}

const employee1 = new Employee("yatin", "web developer", 45000);
console.log(employee1.getSalary());
