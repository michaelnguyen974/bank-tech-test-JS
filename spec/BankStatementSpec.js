describe("BankStatement", () => {

  beforeEach( () => {
    statement = new BankStatement;
  })

  it("checks if Bankstatement has balance of 0", () => {
    expect(statement.balance).toEqual(0)
  })

  it("checks if we can add an amount via depositing", () => {
    statement.deposit(20)
    expect(statement.balance).toEqual(20)
  })  

  it("looks for transaction history array to start empty", () => {
    expect(statement.transactionHistory).toEqual([])
  })

  it("will check to see if a singular transaction exists in transaction history", () => {
    statement.deposit(20)
    expect(statement.transactionHistory).toEqual([[20]])
  })
})