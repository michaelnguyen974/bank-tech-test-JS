class AccountHistory {
  constructor() {
    this.transactions = []
  }

  addTransaction(deposit, balance) {
    var hash = {"deposit": null, "withdraw": null,"balance": balance}
    if (deposit > 0) {
      hash.deposit = deposit 
    } else {
      hash.withdraw = deposit
    }
    this.transactions.push(hash)
  }

}

