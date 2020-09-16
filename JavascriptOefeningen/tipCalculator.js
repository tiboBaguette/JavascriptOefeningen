let tipCalculator = function(total, tipPercantage = 0.1) {
    return `A ${tipPercantage * 100}% tip on $${total} would be $${total * tipPercantage}`
}

console.log(tipCalculator(100))
console.log(tipCalculator(200, 0.2))