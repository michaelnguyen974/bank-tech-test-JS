class Account {

  constructor(accountHistory = new AccountHistory) {
    this.balance = 0
    this.history = accountHistory
  };

  deposit(amount) {
    var singleTransaction = []
    singleTransaction.push(amount)
    this.history.transactions.push(singleTransaction)
    this.balance += amount 
  };

   withdraw(amount) {
    var singleTransaction = []
    singleTransaction.push(amount)
    this.history.transactions.push(singleTransaction)
    this.balance -= amount
  };

};