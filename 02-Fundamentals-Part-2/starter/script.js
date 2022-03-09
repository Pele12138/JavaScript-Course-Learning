
/* // 'use strcit';
// function declaration
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

console.log(fruitProcessor(1, 2));

//function expression
const calAge2 = function (birthyear) {
    return 2030 - birthyear;
} */

// Challenge #1
/*const calcAverage = (socre1, socre2, score3) => (socre1 + socre2 + score3) / 3;
const avrDolphins = calcAverage(85, 54, 41);
const avrKoalas = calcAverage(23, 34, 27);
console.log(avrDolphins);
console.log(avrKoalas);

const checkWinner = function (avr1, avr2) {
    if (avr1 >= avr2 * 2) {
        console.log(`Koalas win (${avr1} vs. ${avr2})`);
    } else if (avr2 >= avr1 * 2) {
        console.log(`Dophins win (${avr2} vs. ${avr1})`);
    } else {
        console.log("No team wins");
    }
}

checkWinner(avrKoalas, avrDolphins);*/

//==================================//

//Arrays
/* const friends = ['Pele', 'Michael', 'Peter'];
console.log(friends);

const years = new Array(1998, 1999, 2000, 2001);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = 'Pele';
const pele = [firstName, 'Pan', friends, 2022 - 2001];
console.log(pele); */

/* const friends = ['Pele', 'Michael', 'Peter'];
console.log(friends.push('Pele'));
console.log(friends)

friends.unshift('John');
console.log(friends);


friends.pop(1);
console.log(friends);

friends.pop('Pele');
console.log(friends) */

/*const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * .15 : bill * .2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total); */

//Objects


/*
console.log(pele);
console.log(pele.lastName);
console.log(pele['lastName']);
const nameKey = 'Name';
console.log(pele['first' + nameKey]);
console.log(pele['last' + nameKey]);

// const interstedIn = prompt('What do u want to now about Jonas?Choose between firstName, lastName, age or job.');
// console.log(interstedIn);
// console.log(pele[interstedIn]);

pele.location = 'Hangzhou';
pele['Instagram'] = '@Pele12138';
console.log(pele);

//pele['bestfriend'] = pele['friends'][0];
// console.log(pele);

console.log(`${pele.firstName} has ${pele['friends'].length} friends, and his best friend is ${pele['friends'][0]}`);

 */

/*const pele = {
    firstName: 'Pele',
    lastName: 'Pan',
    birthYear: 2001,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven '],
    haveDriveLicence: false,

    // clacAge: function (birthYear) { return 2022 - birthYear; }
    clacAge: function () { return 2022 - this.birthYear; }
};

// console.log(pele.clacAge(2001));
// console.log(pele['clacAge'](2001));
console.log(pele['clacAge']());*/


//loops
/* for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋🏻`)
} */

//loop through ararys
/* const types = [];

const pele = {
    firstName: 'Pele',
    lastName: 'Pan',
    birthYear: 2001,
    job: 'Student',
    friends: ['Michael', 'Peter', 'Steven '],
    haveDriveLicence: false,

    // clacAge: function (birthYear) { return 2022 - birthYear; }
    clacAge: fun ction () { return 2022 - this.birthYear; }
};
const friends = ['Pele', 'Michael', 'Peter'];
for (let i in pele) {
    console.log(pele[i]);
    if (typeof pele[i] !== 'string') continue;
    types.push(pele[i]);
}
console.log(types); */

/* const pele = [
    'Pele',
    'Pan',
    2020 - 2001,
    'Student',
    ['Michael', 'Peter', 'Steven']
]
for (let i = pele.length - 1; i >= 0; i--) {
    console.log(i, pele[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`)
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight repetition ${rep} 🏋🏻`)
    }
} */

/* //While loop
let dice = Math.trunc(Math.random() * 6 + 1);
console.log(dice)
while (dice > 0) {
    console.log(`WHILE: Lifting weights reprtition ${dice}`);
    dice--;
} */

// Challenge #4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [], total = [];


const calcAverage = function (arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        sum += element;
    }
    return sum / arr.length;
}

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
for (let index = 0; index < bills.length; index++) {
    const element = calcTip(bills[index]);
    tips.push(element);
    total.push(element + bills[index]);
}
console.log(tips);
console.log(total);
console.log(calcAverage(tips));
console.log(calcAverage(total));