// Problem Statement: Given an integer N, return all divisors of N.
// A divisor of an integer N is a positive integer that divides N without leaving a remainder. In other words, if N is divisible by another integer without any remainder, then that integer is considered a divisor of N.
// Example 1:
// Input:N = 36
// Output:[1, 2, 3, 4, 6, 9, 12, 18, 36]

//brute force aproach
let n = 36;

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     process.stdout.write(`${i} `);
//   }
// }

//best approach
let ans =[]
// for(let i =1;i< Math.sqrt(n);i++){
//     if(n % i ===0)
//     {
//         ans.push(i)
//         if((n / i) !== i){
//             ans.push(n / i)
//         }
//     }
// }
for(let i =1;i*i<n;i++){
    if(n % i ===0)
    {
        ans.push(i)
        if((n / i) !== i){
            ans.push(n / i)
        }
    }
}

console.log(ans.toSorted());

