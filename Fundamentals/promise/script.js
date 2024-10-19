
const resolvebtn = document.querySelector("#resolve-btn")
const rejectbtn = document.querySelector("#reject-btn")



//Promise is a Object

const p = new Promise((resolve,reject)=>{
    // resolve({myName:"krisnna"})
    //reject("promise rejected")
    resolvebtn.addEventListener('click',()=>{
        resolve("Promise resolcved")
    })
    rejectbtn.addEventListener('click',()=>{
        reject("Promise reject")
    })
})
p.then(()=>{
    console.log("i am then");
    
}).catch((e)=>{
    console.log("rejected");
    
})

