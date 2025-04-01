// const data = [
//     "krishna",
//     "nand",
//     "roy",
//     1,
//     2,
//     3
// ]
// let i=1
// let ans = data.map((d)=> {
//     return data
    
    
// });

// console.log(ans);

// const myobj = {user1:"krishna",user2:"nand",user3:"roy",user4:"raj"}

// const {user3,user1} = myobj

// console.log(user1, user3);


// function sumOfSeries(n) {
//     // code here
//     if(n == 1){
//         return n
//     }
    
//     return (n*n*n) + sumOfSeries(n-1)
    
// }

// console.log(sumOfSeries(5));
// let ans = Math.floor(Math.random() * 26)+1

// console.log(ans);



function genetateRBG(){
    let one=0
    let two = 0
    let three = 0
    for(let i =0;i< 3;i++){
      let num = Math.floor(Math.random() * 255)
      console.log(num);
      
      if(i===0){
        one=num
      }
      if(i===1){
        two=num
      }
      if(i===2){
        three=num
      }
    }
    console.log(one);
    console.log(two)
    console.log(three)
    
  }

  genetateRBG()