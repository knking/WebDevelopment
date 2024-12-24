
const inputval = document.querySelector(".main-section input")

let count = 0
let ans =''
let tmp = ''
inputval.addEventListener('input',()=>{
count++
tmp+=inputval.value
ans=tmp
tmp=""
if(count === 3){
ans = `+(${ans})-`
}
if(count > 3){
    ans = `+(${ans})-`, ans
}
console.log(ans);

})