function calculateArithmetic(a, b, arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a, b)
    return ans
}

function sum(a, b){
    return a + b
}

function multiply(a, b){
    return a*b
}

console.log(calculateArithmetic(5, 7, sum))
console.log(calculateArithmetic(5, 7, multiply))