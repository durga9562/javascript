(function(str){
    let reversed = "";
    for(let character of str){
        reversed = character+reversed;
    }
    console.log({
        reversed_value : reversed
    })
})("kumar");