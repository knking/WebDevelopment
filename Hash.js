
// let arr =[2,3,4,1,6,8,5,1,2]

// let myArr = new Array(12).fill(0)

// for(let i=0;i<arr.length;i++){
//     myArr[arr[i]] = myArr[arr[i]]+1
// }

// console.log(myArr);

//  let str = 'defghij'

// console.log(str.charCodeAt(0)- 'a'.charCodeAt(0));

// console.log('a'.charCodeAt(0));

// let hash = new Array(6).fill(0)

// for(let i=0;i<7;i++){
//     hash[str[i].charCodeAt(0)- 'a'.charCodeAt(0)]++
// }

// console.log(hash);


const promiseOne = new Promise(function(resolve,reject){

  setTimeout(()=>{
    resolve()
    console.log("Async task completed");
        
    },2000)
})

promiseOne.then(()=>{
    console.log("Promise Consumed")
})