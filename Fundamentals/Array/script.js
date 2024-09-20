// const username = 'Anurag Singh'

// const fruitsCollection = ['Apple', 'Banana', 'Grapes', 'Dates']

// const newObject = {}
// const newArray = []

// const evenNumbers = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
// const animals = ['Dog', 'Cat', 'Rat', 'Lion', 'Elephant', 'Cow', 'Tiger']
// const oddNumber = [1, 3, 5]

// // evenNumbers.shift()
// // evenNumbers.unshift(0)

// const addedArray1 = evenNumbers.concat(animals)
// const addedArray2 = animals.concat(evenNumbers, oddNumber)

// const elementIndex = animals.indexOf('Cat')
// const isIncluded = animals.includes('dog')

// animals.slice(5)
// animals.slice(2, 5)

// animals.splice(3,2, "new","animal",90) // here value from index 3 will delete upto 2 index (end will be excluded)and new value new animal and 90 will be added in array

// const nameAndNumberList = [
//     ['Adarsh', 75],
//     ['Akash', 90],
//     ['Anurag', 9],
//   ]
  
//   const ticTacToe = [
//       ['X', null, null],
//       [null, null, 'O'],
//       ['O', null, 'X']
//   ]

let newArr=[
    ['krishna','nand','roy'],
    ['age','24']
]

console.log(newArr[1][1]);
console.log(newArr[1]);

// --------------------------copy array--------------------------------------------

// const username1 = 'Anurag'
// let username2 = username1
// username2 = username2 + ' Singh'

const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits

// myFruits.push('Dates')
// myFruits.push('Grapes')

// Object.assign(myFruits, fruits)
const myFruits = [...fruits]

// const myFruits = [].concat(fruits)
// const myFruits = fruits.slice()

const user1 = {
  firstName: 'Anurag',
  lastName: 'Singh',
  pata: {
    city: 'Delhi',
    pincode: 989888,
  },
  subject: ['Physics', 'CS', 'Maths']
}

// Shallow Copy

// const user2 = {}
// Object.assign(user2, user1)
const user2 = { ...user1 }