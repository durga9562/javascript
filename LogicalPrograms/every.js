const everyDemo = [10,20,30,40,50,"sbd"];
const thereAllPass = everyDemo.every ( val => {
    return typeof val === 'number'
})
console.log(thereAllPass)
