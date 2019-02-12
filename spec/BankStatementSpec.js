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

  it("checks to see if money is withdrawn and balance decreases", () => {
    statement.deposit(50)
    statement.withdraw(20)
    expect(statement.balance).toEqual(30)
  })

  it("will check to see if a singular transaction exists in transaction history", () => {
    statement.deposit(20)
    expect(statement.account.transactionHistory).toEqual([[20]])
  })
  
  it("checks the transaction history when money has been deposited and withdrawn", () => {
    statement.deposit(50)
    statement.withdraw(20)
    expect(statement.account.transactionHistory).toEqual([[50], [20]])
  })

})