class AccountHistory {
  constructor() {
    this.transactions = []
  }

  addTransaction(deposit, balance) {
    var hash = {"deposit": deposit, "balance": balance}
    this.transactions.push(hash)
  }

}

