class BankStatement {
  constructor() {
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount 
  }
}