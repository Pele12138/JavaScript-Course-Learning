const massMark = 95
const massJhon = 85
const massPele = 68.6
const heightPele = 1.69
const heightMark = 1.88
const heightJhon = 1.76

function BMICalculator(mass, height) {
    return mass / height ** 2
}

/* let bmiMark = BMICalculator(massMark, heightMark)
let bmiJhon = BMICalculator(massJhon, heightJhon)

let markHigherBMI = bmiMark > bmiJhon;

if (markHigherBMI) {
    console.log(`Mark's BMI ${bmiMark}is higher than John's${bmiJhon}! 🤩`)
} else {
    console.log(`John's BMI ${bmiJhon}is higher than Mark's${bmiMark}! 🤪`)
} */

console.log(BMICalculator(massPele, heightPele));