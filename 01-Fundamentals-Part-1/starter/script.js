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
/*const hasDriverLisense = false;
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

/*const age = 18;
if (age === 18) console.log("ALready a adult")

// triple equal & double equal
// === strict equality operator (does not perform type coercion , only return true when both values are exactly the same)
// == loose equality operator (does type coercion)

/*let favourite = prompt("What's your favourite number?");
console.log(favourite);
if (favourite === '23') {
    console.log("You are already 23 years old!")
} else if (favourite === '7') {
    console.log("You are still a child")
} else {
    console.log("You are not 23 or 7")
}
}*/

/*const hasDriveLicense = true;
const hasGoodVision = false;
const isTired = false;
const shouldDrive = hasDriveLicense && hasGoodVision;
console.log(shouldDrive);
if (hasDriveLicense && hasGoodVision && !isTired) {
    console.log("You can drive");
} else {
    console.log("You can't drive");
}*/


/* const day = 'thursday';

switch (day) {
    case 'monday':
        console.log('You gotta fout lessons');
        break;
    case 'tuesday':
        console.log('You have only 1 lesson! Ula')
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Carry on, it\'s the middle of the week! ')
    default:
        break;
} */

// statements & fundmentals
// expressions code that produce values
// statement if/else {does't reallt produce a value }

//ternary operator ( three parts )
/*const age = 22;
// age >= 18 ? console.log('U can drink beer 🍺') : console.log('Just drink water 💦');
const drink = age >= 18 ? 'beer🍺' : 'water💦';
console.log(drink)

console.log(`I like to drink ${age >= 18 ? 'beer' : 'water '}`)*/


// challenge #4
const bill = 430;
let tip = (bill >= 50 && bill <= 300) ? bill * .15 : bill * .2;
console.log(`The bill value is $${bill},and the tip is $${tip},so you need to pay $${tip + bill}`)