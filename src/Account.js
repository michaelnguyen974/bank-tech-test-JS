class Account {

  constructor(accountHistory = new AccountHistory) {
    this.balance = 0
    this.history = accountHistory
  };

  deposit(amount) {
    this.history.transactions.push(amount)
    this.balance += amount 
  };

   withdraw(amount) {
    this.history.transactions.push(amount)
    this.balance -= amount
  };

};