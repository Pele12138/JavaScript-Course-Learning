// Promise API 对Promise对象的批量操作

function getPromises() {
  return [
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) =>
      setTimeout(() => reject(new Error("2OPs!")), 2000)
    ),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
  ];
}

//Promise.all(getPromises()).then(console.log);
// 接受一个或多个Promise对象的数组
// Promise.allSettled(getPromises()).then(console.log);
// 返回一个对象数组，每个结果对象的结构为 { statuse: fulfiled/rejected, result: vallue/reson}
Promise.race(getPromises()).then(console.log);
// 等待第一个有结果的Promise，并返回result/error
