// Problem Statement: Given two integers N1 and N2, find their greatest common divisor.

// The Greatest Common Divisor of any two integers is the largest number that divides both integers.

function gcdNum(n1,n2){
    let gcd=1
    for(let i=1;i<=Math.min(n1,n2);i++){
        if(n1 % i ==0 && n2 % i == 0){
            gcd=i
        }
    }
    return gcd
}
console.log(gcdNum(20,25));
