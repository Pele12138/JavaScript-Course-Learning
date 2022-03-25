/*function counter(n) {
  return new Promise((resolve, reject) => resolve(1 + n));
}

function adder(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
}

function delay(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a);
    }, 1000);
  });
}
const callAll = () => {
  counter(1)
    .then((val) => adder(val, 3))
    .then((val) => delay(val))
    .then(console.log);
};

callAll();

// ====>> Use Async & Await
const callAll2 = async () => {
  const count = await counter(1);
  const sum = await adder(count, 3);
  console.log(await delay(sum));
};
callAll2();

//课堂练习
const delay2 = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
delay2(2000).then(() => console.log('Print this in 2s'));

/* const wait = async () => {
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve;
    }, 1000)
  );
  return 'hi';
}; */
async function wait() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return 'hi';
}

const fn = () => {
  wait().then((result) => console.log(result));
};
fn();

// Prictice 9
const arr = [1, 2, 3];
const delay3 = (num) => {
  new Promise(() => {
    setTimeout(() => {
      console.log(num);
    }, 1000);
  });
};
// delay3(2);

arr.forEach(delay3);

arr.reduce(async (promise, num) => {
  await promise;
  return await new Promise(() => {
    setTimeout(() => {
      console.log(num);
    }, 1000);
  });
}, Promise.resolve());
