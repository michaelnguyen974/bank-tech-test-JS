class BankStatement {

  constructor(account = new AccountHistory) {
    this.balance = 0
    this.account = account
  };

  deposit(amount) {
    var singleTransaction = []
    singleTransaction.push(amount)
    this.account.transactionHistory.push(singleTransaction)
    this.balance += amount 
  };

   withdraw(amount) {
    var singleTransaction = []
    singleTransaction.push(amount)
    this.account.transactionHistory.push(singleTransaction)
    this.balance -= amount
  };

};