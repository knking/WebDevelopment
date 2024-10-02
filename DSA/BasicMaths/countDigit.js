//count digit
// To count the number of digits in a number, we can use the algorithm created in Extract Digits as now instead of extracting digits we are simply creating a counter to count the number of digits in the number..

// Algorithm:

// Step 1:Initialise a counter to store the number of digits.

// Step 2:While N is greater than 0, execute the following:

// Increment the counter by 1
// Update N by removing its last digit by performing a modulo 10 (%10) operation on it.
// Step 3:After exiting the while loop, we return the counter as the number of digits.

let n = parseInt(process.argv[2]);
let count =0
while(n > 0){
n = Math.floor(n / 10)
count ++;

}
console.log(count);


//-----------------------------Optimal approach

// The logarithmic base 10 of a positive integers gives the number of digits in n. We add 1 to the result to ensure that the count is correct even for numbers that are powers of 10.

// We cast the result to an integer to ensure that any fractional part is discarded giving the exact count of digits.

// Algorithm

// Step 1: Initialise a variable to store the count of digits of the number.

// Step 2: The count of digits can be calculated using log10 N + 1.

// log10 N operation gives the logarithmic base 10 of which returns the power to which 10 must be raised to, to be equal to N.
// We add 1 to the result which accounts for the possibility that N itself is a power of 10.
// Financially cast the result to an integer to ensure that it is rounded down to the nearest whole number.
// Step 3: Return the value of count which represents the count of digits in the input integer N

function countDigit(num){
    let count = parseInt(Math.log10(num))+ 1
    return count
}

console.log(countDigit(1234567));
