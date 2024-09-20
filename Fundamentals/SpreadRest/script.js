const nums1 = [1, 2, 3, 4]
const nums2 = [5, 6, 7, 8, 9]

const myName = 'Anurag'

const joinedArray = [...nums1, ...nums2, 10, 11, 12]

const user = {
    name: 'Anurag',
    age: 25,
}

// const updatedUser = {...user, city: 'Bangalore'}

function add() {
    console.log(arguments);
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i]
    }

    return sum
}



///Rest
const nums1 = [1, 2, 3, 4]

// function add(a, b, c, ...nums) {
//     console.log(a, b, c);
//     console.log('nums:', nums);
//     let sum = 0
//     for(let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i]
//     }
//     return sum
// }

// function add() {
//   return [...arguments].reduce((acc, curr) => acc + curr)
// }

// function add() {
//   return Array.from(arguments).reduce((acc, curr) => acc + curr)
// }

function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr)
}

const result = add(...nums1)