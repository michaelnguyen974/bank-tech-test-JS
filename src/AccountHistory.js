class AccountHistory {
  constructor() {
    this.transactions = []
  }

  addTransaction(amount, balance) {
    var date = new Date("02/12/2019");
    var hash = {"date": date, "deposit": null, "withdraw": null, "balance": balance}
    if (amount > 0) {
      hash.deposit = amount
    } else {
      hash.withdraw = amount
    }
    this.transactions.push(hash)
  }

}

