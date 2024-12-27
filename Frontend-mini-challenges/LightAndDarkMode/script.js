const fullDark = document.querySelector("#full-dark-mode");
const halfDark = document.querySelector("#half-dark-mode");
const container = document.querySelector(".container");

const isFullDarkMode = JSON.parse(localStorage.getItem("fullDark"));
const isContainerDarkMode = JSON.parse(localStorage.getItem("halfDark"));

if(isFullDarkMode){
  fullDark.checked=true
}
if(isContainerDarkMode){
  halfDark.checked=true
}
chnageFullDarkMode()
changeContainerColor()

fullDark.addEventListener("change", () => {
  chnageFullDarkMode();
  changeContainerColor();
});

function chnageFullDarkMode() {
  changeTheme(fullDark,document.body,'fullDark')
  // if (fullDark.checked) {
  //   localStorage.setItem("fullDark", true);
  //   document.body.classList.add("dark");
  // } else {
  //   localStorage.setItem("fullDark", false);
  //   document.body.classList.remove("dark");
  // }
  // halfDark.checked = fullDark.checked;
}
function changeContainerColor() {
  // if (halfDark.checked) {
  //   localStorage.setItem("halfDark", true);
  //   container.classList.add("dark");
  // } else {
  //   localStorage.setItem("halfDark", false);
  //   container.classList.remove("dark");
  // }
  changeTheme(halfDark,container,'halfDark')
}

function changeTheme(mode,element,storagrkey){
if(mode.checked){
localStorage.setItem(storagrkey,true)
element.classList.add('dark')
}else{
  localStorage.setItem(storagrkey,false)
  element.classList.remove('dark')
}
}

halfDark.addEventListener(
  "change",
  changeContainerColor

  //   if(fullDark.checked==true && halfDark.checked == false ){
  //     container.classList.add("white")
  //   }else{
  //     container.classList.remove("white")
  //}
);
