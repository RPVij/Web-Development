// Length
function getLength(str){
    console.log("Original String : ", str)
    console.log("Length : ", str.length)
}
getLength("Hello World")

// indexOf
function findIndexOf(str, target){
    console.log("Original String : ", str)
    console.log("Index : ", str.indexOf(target))
}
findIndexOf("Hello World, Hello World", "Hello")

// lastIndexOf
function findLastIndexOf(str, target){
    console.log("Origianl String : ", str)
    console.log("Index : ", str.lastIndexOf(target))
}
findLastIndexOf("Helloe World, Hello World", "World")

// getSlice
function getSlice(str, start, end){
    console.log("Origianl String : ", str)
    console.log("After Slice : ", str.slice(start, end))
}
getSlice("Preetish", 2, 5)

// getSubstr
function getSubstr(str, start, end){
    console.log("Original String : ", str)
    console.log("After Substr : ", str.substr(start ,end))
}
getSubstr("Preetish", 2, 5)

// replaceString
function replaceString(str, target, replacement){
    console.log("Original String : ", str)
    console.log("After replace : ",str.replace(target, replacement))
}
replaceString("Hello World", "World", "JavaScript")
replaceString("Hello World World", "World", "JavaScript")
replaceString("Hello World", "Alien", "JavaScript")

// splitString
function splitString(str, sep){
    console.log("Original String : ", str)
    console.log("After split : ", str.split(sep))
}
splitString("Hi there, how are you ?", ' ')

function trimString(str){
    console.log("Original String : ", str)
    console.log("After trim : ", str.trim())
}
trimString("    Hello World   ")


function toUpper(str){
    console.log("Original String : ", str)
    console.log("After upper : ", str.toUpperCase())
}
toUpper("preetish vij")

function toLower(str){
    console.log("Original String : ", str)
    console.log("After lower : ", str.toLowerCase())
}
toLower("PREETISH VIJ")