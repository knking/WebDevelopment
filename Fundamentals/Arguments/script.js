// const add1 = () => {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i]
//   }
//   return sum
// }

const add3 = function () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i]
    }
    return sum
  }


  //Default paramenter
  function multiply(a, b = 1) {
    return a * b
  }
  
  function rollADie(numberOfSides = 6) {
    return Math.floor(Math.random() * numberOfSides) + 1
  }
  