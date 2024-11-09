
const inputBox = document.getElementById("input-box")
const listContainer =  document.getElementById("list-container")

function addTask(){
    
    if(inputBox.value === ''){
        alert("Enter some value")
        
    }else{
        
        let i = document.createElement('li')
        i.innerHTML = inputBox.value
        listContainer.appendChild(i)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        i.appendChild(span)
    }
    inputBox.value=""
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
    }else if( e.target.tagName ==="SPAN"){
         e.target.parentElement.remove()
    }
},false)