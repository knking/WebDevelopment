// Problem Statement: Given an integer N, return true if it is a palindrome else return false.

// A palindrome is a number that reads the same backward as forward. For example, 121, 1331, and 4554 are palindromes because they remain the same when their digits are reversed.

let num = parseInt(process.argv[2]);

let checkNum = num;
let reverseNum = 0;
function checkPlindrom(num) {
  while (num > 0) {
    let digit = num % 10;
    reverseNum = reverseNum * 10 + digit;
    num = Math.floor(num / 10);
  }
  if(checkNum == reverseNum){
    return "palindrom"
  }
  else return "not paindrom"

}

console.log(checkPlindrom(num));

