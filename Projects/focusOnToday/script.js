const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const error =  document.querySelector(".error-label")

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    const allFieldsFiled = [...inputFields].every((input) => {
      return input.value;
    });
    if (allFieldsFiled) {
      checkBox.parentElement.classList.toggle("completed");
    }
    else{
        error.style.display='block'
        
    }
  });
});
