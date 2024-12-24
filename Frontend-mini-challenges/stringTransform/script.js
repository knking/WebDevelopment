const input = document.querySelector("#input");

let upper = document.querySelector("#upper");
let lower = document.querySelector("#lower span");
let camel = document.querySelector("#camel span");
let pascal = document.querySelector("#pascal span");
let snake = document.querySelector("#snake span");
let kebab = document.querySelector("#kebab span");
let trim = document.querySelector("#trim span");

input.addEventListener("input", () => {
//   upper.innerText = input.value.toUpperCase();
//   lower.innerText = input.value.toLowerCase();
//   snake.innerText = input.value.split(" ").join("_");
//   kebab.innerText = input.value.split(" ").join("-");
//   trim.innerText = input.value.split(" ").join("");
//   camelCase(input.value);
//   pascalCase(input.value)
display()
});

function display() {
  upper.innerText = input.value.toUpperCase();
  lower.innerText = input.value.toLowerCase();
  snake.innerText = input.value.split(" ").join("_");
  kebab.innerText = input.value.split(" ").join("-");
  trim.innerText = input.value.split(" ").join("");
  camelCase(input.value);
  pascalCase(input.value)
}
display();

function camelCase(str) {
  let ans = "";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      ans += str[i + 1].toUpperCase();
      i++;
    } else {
      ans += str[i];
    }
  }
  camel.innerText = ans;
}

function captilize(str1) {
  return str1[0].toUpperCase() + str1.slice(1, str1.length);
}


function pascalCase(strg) {
  let ans = "";
  const wordarray = strg.split(" ");
  wordarray.forEach((word) => {
    ans += captilize(word);
  });
  pascal.innerText=ans
}

