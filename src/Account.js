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
      bankstatement += '`\n`' + `${transaction.date} || ` + `${transaction.deposit} ||` + `${transaction.withdraw} ||` + `${this.balance}`;
    });
    return bankstatement;
  }
}
