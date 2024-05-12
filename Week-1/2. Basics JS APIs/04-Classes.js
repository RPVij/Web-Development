class Animal {
    constructor(name, legCount, speaks){
        this.name = name
        this.legCount = legCount
        this.speaks = speaks
    }

    static myType(){
        console.log("Animal")
    }
    speak(){
        console.log("Hi there " + this.speaks)
    }
}

Animal.myType()

let dog = new Animal("dog", 4, "bark")
let cat = new Animal("cat", 4, "meow")
dog.speak()