const horizontalPosition = document.querySelector("#horizontal-position");
const showTost = document.querySelector(".show");
const tost = document.querySelector(".tost");
const verticalposition = document.querySelector("#vertical-position");
const tostContainer = document.querySelector(".tost-container");
const tostType = document.querySelector("#tost-type");
const tostMsg = document.querySelector(".tost-msg");

showTost.addEventListener("click", () => {


  const newToast = document.createElement("div");
  
  newToast.classList.add("tost");
  newToast.classList.add(tostType.value)
  console.log(tostType.value);
  
  newToast.innerText = `${tostMsg.value}`;

  const closeicon = document.createElement("span")
  closeicon.innerText = ' ✗'
    newToast.append(closeicon)

  tostContainer.append(newToast);


  if (horizontalPosition.value === "right") {
    tostContainer.classList.add("right");
  } else {
    tostContainer.classList.remove("right");
  }
  if (verticalposition.value === "bottom") {
    tostContainer.classList.add("bottom");
   
  } else {
    tostContainer.classList.remove("bottom");
  }
});
