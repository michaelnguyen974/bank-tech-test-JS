class Account {

  constructor(accountHistory = new AccountHistory) {
    this.balance = 0
    this.history = accountHistory
  };

  deposit(amount) {
    this.balance += amount 
    this.history.addTransaction(amount, this.balance)
  };

   withdraw(amount) {
    this.balance -= amount
    this.history.addTransaction(-amount, this.balance)
  };

};