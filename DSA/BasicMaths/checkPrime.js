// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.

//brtue force approach

let n = parseInt(process.argv[2]);

// function checkPrime(n){
//     // if(n==1){
//     //     console.log("not a prime numner");
//     //     return
//     // }
//     let count =0
//     for(let i=1;i<=n;i++){
//         if(n % i === 0){
//             count ++
//         }
//     }
//     return count
// }
// let numberOccur = checkPrime(n)
// if(numberOccur ===2){
//     console.log("prime Number");

// }
// else{
//     console.log("Not a prime number");

// }

function checkPrime(n) {
  let count = 0;
  for (let i = 1; i*i<=n; i++) {
    if (n % i === 0) {
        count++;
        if(n % i != i){
            count++
        }
    }
  }
  if(count === 2){
    console.log("Prime Number");
    
  }else{
    console.log("Not a prime number");
    
  }
}
console.log(7/2);

checkPrime(n)