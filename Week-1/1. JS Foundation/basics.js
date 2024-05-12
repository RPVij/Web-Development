var a = 1
a = 2
console.log(a)

let b = 1
b = 2
console.log(b)

const c = 1
// c = 2 (not allowed)
console.log(c)


let firstName = "Preetish"
let age = 26
let isMarried = false

console.log("Thise person name is " + firstName + "and their age is " + age)

if(isMarried) console.log(firstName + " is married.")
else console.log(firstName + " is not married.")


let count = 0
for(i=0; i<=1000; i++){
    count = count + i;
}
console.log(count)

const ages = [21, 22, 23, 24, 25]
const numberOfPeople = ages.length

for(let i=0; i<numberOfPeople; i++){
    if(ages[i] % 2 == 0){
        console.log(ages[i])
    }
}

const allUsers = [{
    firstName: "Preetish",
    gender: "male"
},{
    firstName: "Prateek",
    gender: "male"
},{
    firstName: "Niti",
    gender: "female"
}]

for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["gender"] == "male"){
        console.log(allUsers[i]["firstName"])
    }
}

function sum(a,b){
    const sumValue = a+b
    return sumValue
}

const value = sum(1, 2)
const value2 = sum(1, 10)
console.log(value)
console.log(value2)