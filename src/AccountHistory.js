class AccountHistory {
  constructor() {
    this.transactions = []
  }

  addTransaction(amount, balance, date = new Date("2019, 02, 12")) {
    var hash = {"date": date, "deposit": null, "withdraw": null, "balance": balance}
    if (amount > 0) {
      hash.deposit = amount
    } else {
      hash.withdraw = amount
    }
    this.transactions.push(hash)
  }

}

