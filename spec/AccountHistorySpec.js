describe("AccountHistory", () => {

  beforeEach( () => {
    accountHistory = new AccountHistory;
  })

  it("looks for transaction history array to start empty", () => {
    expect(accountHistory.transactions).toEqual([])
  })

  it("add transaction will add hash to the array", () => {
    expect(accountHistory.addTransaction()).toBeDefined();
  })

})