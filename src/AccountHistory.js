class AccountHistory {
  constructor() {
    this.transactions = [];
  }

  addTransaction(amount, balance, date = new Date('2019, 02, 12')) {
    const hash = {
      date, deposit: null, withdraw: null, balance,
    };
    if (amount > 0.00) {
      hash.deposit = amount;
    } else {
      hash.withdraw = amount;
    }
    this.transactions.push(hash);
  }
}
