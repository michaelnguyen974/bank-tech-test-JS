describe("Account", () => {

  beforeEach( () => {
    account = new Account;
  })

  it("checks if Account has balance of 0", () => {
    expect(account.balance).toEqual(0)
  })

  it("checks if we can add an amount via depositing", () => {
    account.deposit(20)
    expect(account.balance).toEqual(20)
  })  

  it("checks to see if money is withdrawn and balance decreases", () => {
    account.deposit(50)
    account.withdraw(20)
    expect(account.balance).toEqual(30)
  })

  it("will check to see if a singular transaction exists in transaction history", () => {
    account.deposit(20)
    expect(account.history.transactions).toEqual([20])
  })
  
  it("checks the transaction history when money has been deposited and withdrawn", () => {
    account.deposit(50)
    account.withdraw(20)
    expect(account.history.transactions).toEqual([50, 20])
  })

  it("add transaction method will add a hash to the transactions array", () => {
    account.history.addTransaction()
    expect(account.history.transactions).toEqual([{}])
  })

})