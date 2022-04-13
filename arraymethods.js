// ========= ARRAY METHODS ==========
// We can use array methods to manipulate our arrays

// push strawberry into our array
// fruit.push('strawberry')

// // remove the last item
// fruit.pop()

// // add something in the front
// fruit.unshift('tomato', 'blueberries')

// // remove the first item
// fruit.shift()

// Task - add two arrays together
// const fruit = ['mango', 'kiwi', 'apple', 'banana']

// const fruit2 = ['orange', 'grapefruit', 'pear']

// for(let i = 0; i < fruit2.length; i++) { // i < 3
//   fruit.push(fruit2[i])
// }

// concat()
// const allFruits = fruit.concat(fruit2)
// console.log(allFruits)

// spread operator => ... => came into play in ES6
// const allFruits = [...fruit, 'rambutan', ...fruit2]
// console.log(allFruits)

// Print array
// console.log(allFruits)

// splice - changes the array permanently by removing or replaying
// the first argument in splice points to the index where we want to start
// second argument in splice is the deletion count
// allFruits.splice(1, 3)

// insert an item somewhere inside our array - if we're not deleting anything it adds before the specified index
// allFruits.splice(2, 0, 'grapes')

// delete apple to orange using splice
// allFruits.splice(2, 4)

// slice - creates shallow copy, takes in 1 or 2 arguments
// print everything from an index and to the end of an array
// let newArr = allFruits.slice(3)

// print from index to a certain amount - banana to grapefruit
// let newArr = allFruits.slice(3,7)

// sort
// 
// allFruits.sort()

const numbers = [1, 7, 5, 8, 2, 11, 2000]
numbers.sort()

// console.log(numbers)

// includes - determines whether an array includes a certain value - only returns boolean
let word = 'mango'
// let hasWord = allFruits.includes(word.toLowerCase())
// console.log(hasWord)

// console.log('updated array')
// console.log(allFruits)

// indexOf
// console.log(allFruits.indexOf('mango'))