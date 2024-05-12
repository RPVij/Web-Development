function a(){
    return new Promise(function(resolve){
        setTimeout(resolve, 3000)
    })
}

async function b(){
    let val = await a()
    console.log(val)
    console.log("Hello3")
}

b()
console.log("Hello1")