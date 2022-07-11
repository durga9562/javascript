arr=[1,2,3,4,5,6] //in single line  i need even index value double odd index value cube

arr=arr.map((e,i)=>i%2==0 ?e*2 :e*3);
console.log(arr)