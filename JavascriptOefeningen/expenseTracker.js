let myAccount = {
    name: `Tibo`,
    expenses: 0,
    income: 0,
}

let addIncome = function(account, amount) {
    account.income = account.income + amount
}

let addExpense = function(account, amount) {
    account.expenses = account.expenses + amount
}

let resetAccount = function(account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function(account) {
    let accountTotal = account.income - account.expenses
    return `Account for ${account.name} has $${accountTotal}. $${account.income} in income and $${account.expenses} in expenses.`
}

addIncome(myAccount, 2500)
addExpense(myAccount, 200)
addExpense(myAccount, 500)
message1 = getAccountSummary(myAccount)
console.log(message1)
resetAccount(myAccount)
message2 = getAccountSummary(myAccount)
console.log(message2)