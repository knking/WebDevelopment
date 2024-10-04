
// print linearly form 1 to n using backtracking

function print1ToN(i,n){
if(i<1){
    return 
}
print1ToN(i-1,n)

console.log(i);

}
print1ToN(6,6)