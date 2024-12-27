const arr = ["Developer", "Designer","youtuber","writer"];
// let count = 0
// let arrCount=0
// setInterval(()=>{
//     let str =arr[0]
//     //console.log(str[count]);
//     if(arrCount==0){
//         process.stdout.write(str[count]);
//         count++
//         if(count > 8){
//             arrCount ++
//             count=0
//         }

//     }

//     if(arrCount==1){
//         let str2 =arr[1]
//         //console.log(str2[count]);

//         if(count >= 8){
//             arrCount=0
//             count=0
//         }else{
//             process.stdout.write(str2[count]);
//             count++
//         }

//     }

// },200)

const span = document.querySelector(".main span");

const word = "Developer";
let wordIdx =0

let currentIndex = 0;
let reverseType = false;

const intervalId = setInterval(() => {
  if (!reverseType) {
    span.innerText = span.innerText + arr[wordIdx][currentIndex];
    currentIndex++;
  }else{
    span.innerText=span.innerText.slice(0,span.innerText.length-1)
  }

  if (currentIndex == arr[wordIdx].length) {
    reverseType = true;
  }
  
  if(span.innerText.length === 0 && reverseType){
    reverseType=false
    currentIndex=0
    wordIdx++
  }

  if(wordIdx === arr.length){
    wordIdx=0
  }

}, 200);
