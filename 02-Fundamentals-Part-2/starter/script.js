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
const friends = ['Pele', 'Michael', 'Peter'];
console.log(friends);

const years = new Array(1998, 1999, 2000, 2001);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

const firstName = 'Pele';
const pele = [firstName, 'Pan', friends, 2022 - 2001];
console.log(pele);