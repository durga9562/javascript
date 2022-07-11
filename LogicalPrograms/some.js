const someDemo = [10,20,30,40,50];
const thereIsAlLeast = someDemo.some(val => {
    return val < 1 && val < 58
});
console.log(thereIsAlLeast)