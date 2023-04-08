const customer = {
  customerName: "bhalani yatin",
  balance: 1000,
  deposit: function (amount) {
    customer.balance += amount;
    return `Deposit of ${amount} Rs. is successful. New account balance is ${customer.balance} Rs.`;
  },
  withdraw: function (amount) {
    if (amount > customer.balance) {
      return `inSufficient balance. Currant balance is ${customer.balance} Rs.`;
    }
    customer.balance -= amount;
    return `Withdrawal of ${amount} is Successful. Current balance is ${customer.balance} Rs.`;
  },
};

// current balance of account
console.log(customer.balance);

// doposit of money in account
console.log(customer.deposit(1000));
console.log(customer.balance);

// withdraw of money from account
console.log(customer.withdraw(500));
console.log(customer.balance);

// withdraw amount more than the balance
console.log(customer.withdraw(5000));
