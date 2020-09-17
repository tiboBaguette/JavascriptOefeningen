const account = {
    name: 'Tibo',
    expenses: [],
    income: [],
    addExpense: function(desc, amount) {
      this.expenses.push({
        desc: desc,
        amount: amount
      })
    },
    addIncome: function(desc, amount) {
      this.income.push({
        desc: desc,
        amount: amount
      })
    },
    getAccountSummary: function() {
        let expensesTotal = 0
        this.expenses.forEach(function(item) {
            expensesTotal += item.amount
        })

        let incomeTotal = 0
        this.income.forEach(function(item) {
            incomeTotal += item.amount
        })

        let moneyTotal = incomeTotal - expensesTotal
        return `${this.name} has $${moneyTotal}, $${incomeTotal} in income and $${expensesTotal} in expenses`
    },
}

account.addExpense('Rent', 1000)
account.addExpense('Food', 50)
account.addIncome('Job', 2000)
console.log(account.getAccountSummary())
console.log(account)