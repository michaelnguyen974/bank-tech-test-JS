describe("BankStatement", () => {

  beforeEach( () => {
    statement = new BankStatement;
  })

  it("checks if Bankstatement has balance of 0", () => {
    expect(statement.balance).toEqual(0)
  })
})