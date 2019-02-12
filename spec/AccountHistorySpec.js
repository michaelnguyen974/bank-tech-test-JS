describe("AccountHistory", () => {

  beforeEach( () => {
    account = new AccountHistory;
  })

  it("looks for transaction history array to start empty", () => {
    expect(account.transactionHistory).toEqual([])
  })

})