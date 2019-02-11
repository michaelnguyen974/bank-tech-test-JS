class BankStatement {
  constructor() {
    this.balance = 0
    this.transactionHistory = []
  }

  deposit(amount) {
    var singleTransaction = []
    this.balance += amount 
    singleTransaction.push(amount)
    this.transactionHistory.push(singleTransaction)
  }

   withdraw(amount) {
    var singleTransaction = []
    this.balance -= amount
    singleTransaction.push(amount)
    this.transactionHistory.push(singleTransaction)
  }
}