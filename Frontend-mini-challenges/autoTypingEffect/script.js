const list1 = ["Developer", "Designer", "youtuber", "writer"];
const list2 = ["Rider", "writer", "King", "DevOps"];
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

const span = document.querySelector("h1 span");
const span2 = document.querySelector("h2 span")

const word = "Developer";
let wordIdx = 0;
let skip = 0;
let currentIndex = 0;
let reverseType = false;

function autoType(arr,element){
   const intervalId = setInterval(() => {
    if (skip) {
      skip--;
      return;
    }
    if (!reverseType) {
      skip = 2;
      element.innerText = element.innerText + arr[wordIdx][currentIndex];
      currentIndex++;
    } else {
      element.innerText = element.innerText.slice(0, element.innerText.length - 1);
      currentIndex--;
    }
  
    if (currentIndex == arr[wordIdx].length) {
      skip = 5;
      reverseType = true;
    }
  
    if (element.innerText.length === 0 && reverseType) {
      reverseType = false;
      wordIdx++;
    }
  
    if (wordIdx === arr.length) {
      wordIdx = 0;
    }
  }, 100);
  
}

autoType(list1,span2)

// autoType(list2,span)
