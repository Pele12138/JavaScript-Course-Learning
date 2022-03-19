'use strict';

/* const x = '23';
if (x === 23) console.log(23);

const calcAge = birthyear => 2037 - birthyear;
console.log(calcAge(2020)); */
//TODO Peled

/* const measur = {
  type: 'tmp',
  unit: 'celsius',

  //BUG fixing
  value: 10,
};

console.table(measur);
console.log(measur.value);
const kelvin = measur.value + 273;
console.log(kelvin); */

// Challenge
/* const temperatures = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    str = str.concat(`...${element}ºC in ${i + 1} days `);
  }
  console.log(str);
}; */
// printForecast(temperatures);
// printForecast(temperatures2);
// var b = new Array(1, 2, 3);
// var v = b.clone();
// console.log(b);

// function mySetInterval(callback, t) {}

// console.assets([] === []);
// console.assert(1 === '1');

// 使用setTimeout实现一个mySetInterval;
function mySetInterval(callback, t) {
  const fnc = () => {
    callback(); // 执行传入的回调函数
    setTimeout(() => {
      fnc(); // 递归调用自己
    }, t);
  };
  setTimeout(fnc, t);
}

// 使下面的调用每1000毫秒打印字符串'x'
mySetInterval(() => {
  console.log('x');
}, 1000);

// 实现一个myClearInterval,可以终止一个mySetInterval的执行;
// 提示：使用clearTimeout
//由于我们的 mySetInterval 返回的 timeId 并不是真正的 setTimeout 返回的 id ，所以并不能简单地通过 clearTimeout(timeId) 来清除计时器。
function myClearInterval(timer) {
  clearTimeout(timeMap[timer]);
  delete timeMap[timer];
}
