describe("AccountHistory", () => {

  beforeEach( () => {
    accountHistory = new AccountHistory;
  })

  it("looks for transaction history array to start empty", () => {
    expect(accountHistory.transactions).toEqual([]);
  })

  it("checks to see if add transaction is defined", () => {
    expect(accountHistory.addTransaction).toBeDefined();
  })

})