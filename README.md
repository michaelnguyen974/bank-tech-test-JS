# bank-tech-test-JS
# bank-tech-test
## user stories

```
As a user, 
so I can see documentation on my account, 
I want to view my bank statement.
```

```
As a user, 
so I can store my paychecks,
I want to be able to deposit money.
```

```
As a user, 
so I can use my money for food, 
I want to be able to withdraw money.
```

```
As a user,
so I know how much money I have credited/deposited,
I want to view my how much money I have put in on my bank statement.
```

```
As a user, 
so I know how much money I have debited/withdrawn, 
I want to view how much money I have taken out on my bank statement.
```

```
As a user,
so I can check if I'm broke, 
I want to view the balance on my bank statement. 
```

```
As a user, 
so I can see when I made transactions, 
I want to see the date on each transaction. 
```

```
As a user, 
so I can have my data stored, 
I want my details to be stored in memory.
```

# Specification 

## Requirements

You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance Criteria 
**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see
```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```

## *Ed’s Tips:*
1. Reflect on the approach you want to take. What is your development process? What do you want to achieve from this challenge?
2. Set up your project.
3. Write a feature test first - defined by the acceptance criteria.
4. Always: Keep it simple as.

