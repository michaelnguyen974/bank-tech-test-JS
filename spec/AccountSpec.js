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

  it("add transaction method will add a hash to the transactions array", () => {
    account.deposit(20)
    expect(account.history.transactions).toEqual([{"deposit": 20, "withdraw": null,"balance": 20}])
  })

  it("checks the transaction balance has changed when money has been deposited and withdrawn", () => {
    account.deposit(100)
    account.withdraw(20)
    expect(account.history.transactions).toEqual([{"deposit": 100, "withdraw": null ,"balance": 100}, {"deposit": null, "withdraw": -20 ,"balance": 80}])
  })

})