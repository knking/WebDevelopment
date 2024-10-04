// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

// function gcdNum(n1,n2){
//     let gcd=1
//     for(let i=1;i<=Math.min(n1,n2);i++){
//         if(n1 % i ==0 && n2 % i == 0){
//             gcd=i
//         }
//     }
//     return gcd
// }
// console.log(gcdNum(20,25));

//Better approach

// function gcdFun(n1, n2){

//     for(let i=Math.min(n1,n2);i>=1;i--){
//         if(n1 % i ==0 && n2 % i == 0){
//             return i
//         }
//     }
// }

// console.log(gcdFun(11,20));

// Optimal Approach
// Euclidean Algorithm 

// gcd(a,b)= gcd(a-b,b) a>b

function findGcd(n1,n2){

    while(n1>0 && n2 >0){
        if(n1 > n2){
            n1 = n1% n2
        }
        else{
            n2 = n2% n1
        }
    }
    if(n1===0){
        console.log("GCD is ", n2);
        
    }else{
        console.log("GCD is ", n1);
        
    }
}
findGcd(11,20)