const fullDark = document.querySelector("#full-dark-mode");
const halfDark = document.querySelector("#half-dark-mode");
const container = document.querySelector(".container");

fullDark.addEventListener("change", () => {
  if (fullDark.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  halfDark.checked = fullDark.checked
  if (halfDark.checked) {
    container.classList.add("dark");
  } else {
    container.classList.remove("dark");
  }

});

halfDark.addEventListener("change", () => {
  if (halfDark.checked) {
    container.classList.add("dark");
  } else {
    container.classList.remove("dark");
  }
//   if(fullDark.checked==true && halfDark.checked == false ){
//     container.classList.add("white")
//   }else{
//     container.classList.remove("white")
  //}
});
