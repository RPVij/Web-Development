const fs = require("fs")

function findSum(n){
    let ans = 0
    for(let i=0; i<n; i++){
        ans += i
    }
    return ans
}

function findSumTill100(){
    console.log(findSum(100))
}

// setTimeout
setTimeout(findSumTill100, 1000)
console.log("Hello World")

// readFile
fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data)
})
console.log("Hello Alien")