const promise1 = Promise.resolve("promise1 completed");
const promise2 = new Promise((res, rej) =>{
    setTimeout(() =>{
        res("promise2 completed");
    },2000);
});

promise1.then(res => console.log(res));
promise2.then(res => console.log(res));