let Dolphins = [97, 112, 101];
let Koalas = [109, 95, 106];

function average(arr) {
    var sum = 0;
    sum = arr[1] + arr[2] + arr[0];
    return sum / 3;
}

let avrDolphins = average(Dolphins);
let avrkoalas = average(Koalas);

console.log(avrDolphins);
console.log(avrkoalas);
/* if ((avrDolphins > avrkoalas)) {
    console.log("Dolphins win");
} else if (avrDolphins === avrkoalas) {
    console.log("A draw")
}
else {
    console.log("Koalas win");
} */

if (avrDolphins > avrkoalas && avrDolphins >= 100) {
    console.log("Dophins win! 🏆");
} else if (avrDolphins < avrkoalas && avrkoalas > 100) {
    console.log("Koalas win! 🏆");
} else if (avrDolphins === avrkoalas && avrDolphins > 100 && avrkoalas > 100) {
    console.log("Both win the 🏆")
} else {
    console.log("No one wins the 🏆");
}