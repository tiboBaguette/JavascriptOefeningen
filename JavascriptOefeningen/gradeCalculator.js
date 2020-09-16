let getStudentScore = function(score, totalScore) {
    let percentage = score / totalScore * 100
    let gradeLetter = getGradeLetterByPercentage(percentage)
    return `You got a ${gradeLetter} (${percentage}%)!`
}

let getGradeLetterByPercentage = function(percentage) {
    let letter
    if (percentage > 89) {
        letter = 'A'
    } else if (percentage > 79) {
        letter = 'B'
    } else if (percentage > 69) {
        letter = 'C'
    } else if (percentage > 59) {
        letter = 'D'
    } else {
        letter = 'F'
    }
    return letter
}

let message1 = getStudentScore(15, 20)
console.log(message1)

let message2 = getStudentScore(19, 20)
console.log(message2)

let message3 = getStudentScore(9, 20)
console.log(message3)