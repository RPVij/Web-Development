function findSum(n){
    let ans = 0
    for(let i=0; i<n; i++){
        ans = ans + i
    }
    return ans
}

let ans = findSum(100)
console.log(ans)

let ans2 = findSum(1000)
console.log(ans2)