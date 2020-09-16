let passwordValidator = function(password) {
    if (password.length > 8) {
        if (!password.includes('password')) {
            return true
        }
    }
    return false
}

console.log(passwordValidator('estsett'))
console.log(passwordValidator('fcrhlesnjtkcknhesk'))
console.log(passwordValidator('heuupasswordnesht'))