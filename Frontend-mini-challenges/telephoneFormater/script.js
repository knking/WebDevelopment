
const inputval = document.querySelector(".main-section input")

let previousValue = ''
let firstThreeNum =''
inputval.addEventListener('input',()=>{
    const val = inputval.value

    if(/\d+$/g.test(val)){
        inputval.value = val
    }else{
        inputval.value=val.substring(0,val.length-1)
    }
    if(val.length === 4 && previousValue.length < val.length){
        firstThreeNum = val.substring(0,3)
        inputval.value = `+(${firstThreeNum}) - ${val[val.length-1]}`
    }else if(val.length === 9 && previousValue.length > val.length){
        inputval.value =firstThreeNum
    }
    previousValue = val
    })