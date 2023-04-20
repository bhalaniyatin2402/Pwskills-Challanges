class User {
  #password;
  constructor(n, p) {
    this.name = n;
    this.#password = p;
  }

  get getPassword() {
    let password = [...this.#password];
    let hiddenPassword = "";
    password.map((e) => {
      hiddenPassword += "*";
    });
    return hiddenPassword;
  }

  setPassword(p) {
    try {
      if (p.length < 8) {
        throw Error("Password must be atleat 8 characters long");
      } else if (/[A-Z]/.test(p) == false) {
        throw Error("password contain atleast on uppercase letter");
      } else if (/[0-9]/.test(p) == false) {
        throw Error("password contain atleast one number");
      }
      this.#password = p;
    } catch (error) {
      console.log(error.message);
    }
  }
}

const user = new User("yatin", "Yatin1234");
// check for
console.log(user.getPassword);
user.setPassword("myPassword");
user.setPassword("myPassword1223");
console.log(user.getPassword);
