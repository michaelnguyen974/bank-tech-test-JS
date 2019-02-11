class BankStatement {

  constructor(account = new Account) {
    this.balance = 0
    this.account = account
  };

  deposit(amount) {
    var singleTransaction = []
    this.balance += amount 
    singleTransaction.push(amount)
    this.account.transactionHistory.push(singleTransaction)
  };

   withdraw(amount) {
    var singleTransaction = []
    this.balance -= amount
    singleTransaction.push(amount)
    this.account.transactionHistory.push(singleTransaction)
  };

};