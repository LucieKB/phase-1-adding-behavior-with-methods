class Cat {
    constructor(name){
        this.name = name
    }

    speak(){
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name){
        this.name = name
    }

    speak(){
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name,gender){
        this.name = name;
        this.gender = gender
    }

    speak(){
        let answer;
        if (this.gender === "male"){
            answer = `It's me! ${this.name}, the parrot!`
        }
        else {
            answer = `${this.name} says squawk!`
        }

        return answer
    }
}

