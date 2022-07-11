var pets = ["dog","chicken","cat","dog","chicken"];
var petcounts = pets.reduce(function(obj,pet){
    if(!obj[pet]){
        obj[pet]=1;
    }else{
        obj[pet]++;
    }
    return obj;
},{})
console.log(petcounts);