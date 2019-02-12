describe("Account", () => {

  beforeEach( () => {
    account = new Account;
    date = new Date("02/12/2019")
  })

  it("checks if Account has balance of 0", () => {
    expect(account.balance).toEqual(0.00)
  })

  it("checks if we can add an amount via depositing", () => {
    account.deposit(20.50)
    expect(account.balance).toEqual(20.50)
  })  

  it("checks to see if money is withdrawn and balance decreases", () => {
    account.deposit(50)
    account.withdraw(20)
    expect(account.balance).toEqual(30)
  })

  it("add transaction method will add a hash to the transactions array", () => {
    account.deposit(20)
    expect(account.history.transactions).toEqual([{"date": date, "deposit": 20, "withdraw": null,"balance": 20}])
  })

  it("checks the transaction balance has changed when money has been deposited and withdrawn", () => {
    account.deposit(100)
    account.withdraw(20)
    expect(account.history.transactions).toEqual([{"date": date, "deposit": 100, "withdraw": null ,"balance": 100}, {"date": date, "deposit": null, "withdraw": -20 ,"balance": 80}])
  })

  it("looks for date in a single transaction", () => {
    account.deposit(100)
    expect(account.history.transactions).toEqual([{"date": date,"deposit": 100, "withdraw": null ,"balance": 100}])
  })

})