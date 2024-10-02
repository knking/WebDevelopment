// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.
// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.

let num = parseInt(process.argv[2])

let checkArm = num;
let ans = 0
while(num > 0){

    let digit =  num % 10
    ans = ans + (digit **3)
    num = Math.floor(num/10)
}

if(checkArm === ans){
    console.log("Arm strong num");
    
}else{
    console.log("Not a armstrong");
    
}
