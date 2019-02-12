class Statement {

  transactionHistory(transactions) {
    var output = transactions
      output.forEach( function(singleTransaction) {
      "\n" + singleTransaction.join(' || ')
    }) 
  };
  
  statementHeader() {
    'date || credit || debit || balance'
  }
  
}