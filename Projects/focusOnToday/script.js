const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const error =  document.querySelector(".error-label")
const progressbar = document.querySelector(".progress-bar")
const progressValue = document.querySelector(".progress-value")

checkBoxList.forEach((checkBox,index) => {
  checkBox.addEventListener("click", (e) => {
    const allFieldsFiled = [...inputFields].every((input) => {
      return input.value;
    });
    if (allFieldsFiled) {
      checkBox.parentElement.classList.toggle("completed");
      progressValue.style.width=`${((index +1)* 33.3)}%`
      
    }
    else{
      progressbar.classList.add('show-error')
    }
  });
});
inputFields.forEach((input)=>{
  input.addEventListener('focus',()=>{
    progressbar.classList.remove('show-error')
  })
})