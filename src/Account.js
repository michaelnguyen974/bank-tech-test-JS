/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */

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
    let bankstatement = this.statement.statementHeader();
    this.history.transactions.forEach((transaction) => {
      bankstatement += '`\n`' + `${transaction.date} || ` + `${transaction.deposit} ||` + `${Math.abs(transaction.withdraw)} ||` + `${transaction.balance}`;
    });
    return bankstatement;
  }
}
