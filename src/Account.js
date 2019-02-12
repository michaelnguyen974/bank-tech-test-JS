class Account {

  constructor(accountHistory = new AccountHistory, statemnent = new Statement) {
    this.balance = 0.00
    this.history = accountHistory
    this.statement = statement
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