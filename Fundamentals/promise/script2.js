//creation fo promise

// const promiseOne = new Promise(function (resolve,reject){
//     //do a async taks
//     //DB task
//     //cryptography
//     //network call
//     //file handling
//     //for now we can we a setTimeout for demo purpose becase this is also a async funcation

//     setTimeout(function(){

//         console.log("Hi i am promise1");
//         resolve()
//     },2000)

// })

//consumption of promise
// promiseOne.then(()=>{
//     // .then is related to resloved
//     console.log("Promise resloved");

// })

// storeing a varibale in promise is optional, we can create abd use directly promise

// new Promise((res,rej)=>{
// setTimeout(()=>{
//     console.log("I am Primise two");
//     res()
// })
// }).then(()=>{
//     console.log("Asynac 2 resloved");

// })

//we can pass data in promise also using resolve, we mostly pass object data using resloved
// const promiseThree = new Promise((res,rej)=>{

//     setTimeout(()=>{
//         res({userName:"kn",psd:"1234"})
//     },2000)
// })

// promiseThree.then((data)=>{
//     console.log(data.userName);
//     console.log(data.psd);

// })

//we can send data from one promise to another promise using promise chaining
// const promiseFour = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     let error =  false
//     if(!error){
//         resolve({uname:"knking",psd:98765})
//     }
//     else{
//         reject("USert Not FOund")
//     }
//     },2000)
// })

// promiseFour.then((data)=>{
//     console.log((data));
//     return data.psd
// })
// .then((data2)=>{
//     console.log("i am data from promise 1",data2);

// })
// .catch((err)=>{
//     console.log(err);

//     console.log("Some error occured");

// })
// .finally(()=>{
//     console.log("i will run always");

// })

//we can handle promise using async await also

//we can send data from one promise to another promise using promise chaining
// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ uname: "knking", psd: 98765 });
//     } else {
//       reject("USert Not FOund");
//     }
//   }, 2000);
// });

// async function hanldePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);

//   }
// }
// hanldePromiseFive();

//api call suing async await

// async function getData() {
//   try {
//     const url = "https://jsonplaceholder.typicode.com/users";
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getData();

// api call using .then.catch
const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error");
  });
