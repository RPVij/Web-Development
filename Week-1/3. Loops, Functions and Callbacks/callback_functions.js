function square(n){
    return n*n
}

function cube(n){
    return n*n*n
}

function sumOfSomething(a, b, fn){
    const val1 = fn(a)
    const val2 = fn(b)
    return val1 + val2
}

const ans1 = sumOfSomething(1, 2, square)
const ans2 = sumOfSomething(1, 2, cube)
console.log(ans1)
console.log(ans2)