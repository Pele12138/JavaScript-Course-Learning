
let promise = new Promise((resolve,reject) => {
	setTimeout(() => {
		console.log('a');
		resolve();
	}, 1000);
})

let promise2 = new Promise((resolve,reject) => {
	setTimeout(()=>reject(new Error("Ops!")), 2000)
} )