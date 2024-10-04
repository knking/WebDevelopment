
let n = 10;
let count =0;

// function print1ToN(){
//     if(count === n){
//         return
//     }
//     count ++
//     console.log(count);
//     print1ToN()
// }

// print1ToN()

function printNto1(){
    if(n==0){
        return
    }
    console.log(n);
    n--
    printNto1()
    
}
printNto1()