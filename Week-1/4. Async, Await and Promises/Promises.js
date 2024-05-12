// Promises are syntactical sugar tham make code slightly more readable.
const fs = require('fs')

// my own asychronous function
function readFile(cb){
    fs.readFile("a.txt", "utf-8", function(err, data){
        cb(data)
    })
}

function onDone(data){
    console.log(data)
}

readFile(onDone)

// Promises

function readFile2(){
    return new Promise(function(resolve){
        fs.readFile("a.txt", "utf-8", function(err, data){
            resolve(data)
        })
    })
}

function onDone2(data){
    console.log(data)
}

readFile2().then(onDone2)