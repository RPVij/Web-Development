const initialArray = [1, 2, 3]
console.log(initialArray)

// Push
initialArray.push(4)
console.log(initialArray)

// Pop
initialArray.pop()
console.log(initialArray)

// Shift
initialArray.shift()
console.log(initialArray)

// Unshift
initialArray.unshift(1)
console.log(initialArray)

// Concat
const firstArray = [1, 2, 3]
const secondArray = [4, 5, 6]
const concatArray = firstArray.concat(secondArray)
console.log(concatArray)

// forEach
const array = [1, 2, 3, 4]
array.forEach(function(x){
    console.log(x)
})
