let js = 'JavaScript';
if (js === 'JavaScript') {
    // alert('JavaScript is Fun')
}

// use camelCase to name a variable _uderscore
/*let firstName = "Pele";
let lastName$ = "Pan";
console.log(45 + 46 + 22 + 12);
console.log(firstName);
console.log(lastName$);
console.log(firstName);
console.log(firstName);
let PI = 3.14159;*/
/*
const contry = "China"
const continent = "Asia"
let population = "1400 million"


const isIsland = false;
let language;
console.log(contry)
console.log(continent)
console.log(population)
console.log(isIsland)
console.log(language)

language = 'Chinese';
*/

/*const firstName = "Pele";
const lastName = "Pan";
console.log(firstName, lastName)
console.log('Name:', firstName + ' ' + lastName);
const bornYear = 2001;
let age = 2022 - bornYear;
console.log('Age: ', age)
let isFullAge = age >= 18;
console.log(isFullAge)

let x, y = 10;
x = y /= 2;
// excute/calculate from right 2 left
console.log(x, y)
*/
/*const firstName = "Pele";
const lastName = "Pan";
let fullName = 'Hello \n\
\n\
HI'
console.log(fullName)
console.log(`Hello \n\

Hi`)*/
const hasDriverLisense = false;
const hasGoodVision = true;

console.log(hasDriverLisense && hasGoodVision);


Hi`*/

// type coversion & type coercion(胁迫)
/* const birthYear = '2001';
console.log(Number(birthYear), birthYear);
console.log(String(22), 22);

// type coercion
console.log(1 + 2 + 3 + '4');
// > 64
console.log('1' + '2' - 4);
// > 8

let n = '1' + 1;
n = n - 1;
console.log(n); */
// > 10

const age = 18;
if (age === 18) console.log("ALready a adult")

// triple equal & double equal
// === strict equality operator (does not perform type coercion , only return true when both values are exactly the same)
// == loose equality operator (does type coercion)

let favourite = prompt("What's your favourite number?");
console.log(favourite);
if (favourite === '23') {
    console.log("You are already 23 years old!")
} else if (favourite === '7') {
    console.log("You are still a child")
} else {
    console.log("You are not 23 or 7")
}
