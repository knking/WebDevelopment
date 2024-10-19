
//creation fo promise

const promiseOne = new Promise(function (resolve,reject){
    //do a async taks
    //DB task
    //cryptography
    //network call
    //file handling
    //for now we can we a setTimeout for demo purpose becase this is also a async funcation
    
    setTimeout(function(){
        
        console.log("Hi i am promise1");
        resolve()
    },2000)
    
})

//consumption of promise
promiseOne.then(()=>{
    // .then is related to resloved
    console.log("Promise resloved");
    
})

// storeing a varibale in promise is optional, we can create abd use directly promise

new Promise((res,rej)=>{
setTimeout(()=>{
    console.log("I am Primise two");
    res()
})
}).then(()=>{
    console.log("Asynac 2 resloved");
    
})

//we can pass data in promise also using resolve, we mostly pass object data using resloved
const promiseThree = new Promise((res,rej)=>{

    setTimeout(()=>{
        res({userName:"kn",psd:"1234"})
    },2000)
})

promiseThree.then((data)=>{
    console.log(data.userName);
    console.log(data.psd);
    
})