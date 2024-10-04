const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const error = document.querySelector(".error-label");
const progressbar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const progressLevel = document.querySelector(".progress-level")


const allQuots = [
  'Raise the bar by completing your goals!',
  'Well begunis half done',
  'Just a step away, keep going!',
  'Whoa! You Just completed all the goals, time for chill :D'
]

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
  first:{
    name:"",
    completed:false,
  },
  second:{
    name:"",
    completed:false,
  },
  third:{
    name:"",
    completed:false,
  },
};
let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;
progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount} / 3 Goals completed`;
progressLevel.innerText= allQuots[completedGoalsCount]

checkBoxList.forEach((checkBox, index) => {
  checkBox.addEventListener("click", (e) => {
    const allFieldsFiled = [...inputFields].every((input) => {
      return input.value;
    });
    if (allFieldsFiled) {
      checkBox.parentElement.classList.toggle("completed");

      const inputId = checkBox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
      localStorage.setItem("allGoals", JSON.stringify(allGoals));
      progressValue.firstElementChild.innerText = `${completedGoalsCount} / 3 Goals completed`;
      progressLevel.innerText= allQuots[completedGoalsCount]
    } else {
      progressbar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  input.value = allGoals[input.id].name;
  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed");
  }
  input.addEventListener("focus", () => {
    progressbar.classList.remove("show-error");
  });

  input.addEventListener("input", (e) => {

    if (allGoals[input.id].completed) {
      input.value=allGoals[input.id].name
      return
    }

    // allGoals[input.id] = {
    //   name: input.value,
    //   completed: false,
    // };
    allGoals[input.id].name = input.value
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
