// Problem Statement: Given an integer N return the reverse of the given number.
// Note: If a number has trailing zeros, then its reverse will not include them. For e.g., reverse of 10400 will be 401 instead of 00401.

let num = parseInt(process.argv[2])
let countDigit=0
while(num > 0){

    let digit = num % 10
    countDigit= (countDigit * 10)+ digit
    num = Math.floor(num/10)
}
console.log(countDigit);
