const user1 = '{"name": "Preetish", "age": 26, "gender": "male"}'

// JSON.parse
const user1Json = JSON.parse(user1)
console.log(user1Json)

const user2 = {
     name: "Preyaansh"
    ,age : 19
    ,gender : "male" 
}

//JSON.stringify
const user2String = JSON.stringify(user2)
console.log(user2String)