describe("BankStatement", () => {

  beforeEach( () => {
    statement = new BankStatement;
  })

  it("checks if Bankstatement has balance of 0", () => {
    expect(statement.balance).toEqual(0)
  })

  it("checks if we can add an amount", () => {
    statement.deposit(20)
    expect(statement.balance).toEqual(20)
  })
})