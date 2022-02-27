// 'use strcit';
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
}