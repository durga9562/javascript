const recordVideoOne = new Promise((resolve, reject)=>{
    resolve("video 1")
})
const recordVideoTwo = new Promise((resolve, reject)=>{
    resolve("video 2")
})
const recordVideoThree = new Promise((resolve, reject)=>{
    resolve("video 3")
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((amer)=>{
    console.log(amer)
})