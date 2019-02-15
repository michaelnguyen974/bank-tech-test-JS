// eslint-disable-next-line no-unused-vars
class AccountHistory {
  constructor() {
    this.transactions = [];
  }

  addTransaction(amount, balance, date = new Date().toLocaleDateString()) {
    const hash = {
      date, deposit: '', withdraw: '', balance,
    };
    if (amount > 0.00) {
      hash.deposit = amount;
    } else {
      hash.withdraw = amount;
    }
    this.transactions.push(hash);
  }
}
