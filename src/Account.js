/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Account {
  constructor(accountHistory = new AccountHistory(), statement = new Statement()) {
    this.history = accountHistory;
    this.statement = statement;
    this.balance = 0.00;
  }

  deposit(amount) {
    this.balance += amount;
    this.history.addTransaction(amount, this.balance);
  }

  withdraw(amount) {
    this.balance -= amount;
    this.history.addTransaction(-amount, this.balance);
  }

  print() {
    let bankstatement = 'date || credit || debit || balance';
    this.history.transactions.forEach((transaction) => {
      Object.keys(transaction).forEach((key) => {
        bankstatement += `${transaction[key]}`;
      });
    });
    return bankstatement;
  }
}
