let promise=new Promise((kumar,mani)=>{
    let a=1+2;
    if(a==2){
        kumar("success")
    }else{
        mani("fail")
    }
})
promise.then((amer)=>{
    console.log("this is then "+amer);
}).catch((amer)=>{
    console.log("this is catch "+amer)
});

