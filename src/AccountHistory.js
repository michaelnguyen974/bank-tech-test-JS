class AccountHistory {
  constructor() {
    this.transactions = []
  }

  addTransaction(amount, balance) {
    var hash = {"deposit": null, "withdraw": null,"balance": balance}
    if (amount > 0) {
      hash.deposit = amount
    } else {
      hash.withdraw = amount
    }
    this.transactions.push(hash)
  }

}

