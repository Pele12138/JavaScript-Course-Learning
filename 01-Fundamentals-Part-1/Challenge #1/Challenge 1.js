const massMark = 95
const massJhon = 85
const heightMark = 1.88
const heightJhon = 1.76

function BMICalculator(mass, height) {
    return mass / height ** 2
}

let bmiMark = BMICalculator(massMark, heightMark)
let bmiJhon = BMICalculator(massJhon, heightJhon)

let markHigherBMI = bmiMark > bmiJhon;

console.log(bmiMark)
console.log(bmiJhon)
console.log(markHigherBMI)