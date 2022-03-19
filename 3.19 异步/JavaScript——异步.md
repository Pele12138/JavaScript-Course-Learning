# JavaScript——异步





### 回调

```javascript
setTimeout(() =>{
  console.lod('a');
  setTimeout(() =>{
    console.log('b')
  }, 2000)
}, 1000)
```



### Promise 

生命周期

+ 进行中 Pending 

+ 已处理 Settled

  已处理的代码会进入两种状态

  + 已完成 fulfilled
  + 已拒绝 rejected

创建未处理的Promise

`new Promise((resolve, reject) => {});`

```js

let promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		console.log('a');
		resolve();
	}, 1000);
})

let promise2 = new Promise((resolve,reject) => {
	setTimeout(()=>reject(new Error("Ops!")), 2000)
} )
```



消费Promise

```js

let promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		resolve('a');
	}, 1000);
})

promise.then(result => console.log(result), err => console.log(err));

let promise2 = new Promise((resolve,reject) => {
	setTimeout(()=>reject(new Error("Ops!")), 2000)
} )

promise2.catch(err => {});
```



创建已处理的Promise

```js
let promise = Promise.resolve('finished');
promise.then(
	result => console.log(result)
);

let promise2 = Promise.reject('Ops!');
promise2.catch(
	err => console.log(err)
);
```

Promise链

