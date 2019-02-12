describe("Statement", () => {

  beforeEach( () => {
    statement = new Statement;
  })

  it("will check if statement contains individual transactions", () => {
    expect(statement.transactionHistory).toBeDefined()
  })
})