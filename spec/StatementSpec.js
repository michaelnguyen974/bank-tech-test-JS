describe("Statement", () => {

  beforeEach( () => {
    statement = new Statement;
  })

  it("will check if statement contains individual transactions", () => {
    expect(statement.transactionHistory).toEqual({"date": date,"deposit": 100, "withdraw": null ,"balance": 100})
  })
})