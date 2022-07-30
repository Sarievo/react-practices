// const person = {
//     name: 'Max'
// }

class Human {
    race = "Human"
    constructor(gender) {
        this.gender = gender
    }
}

class Person extends Human {
    constructor(name, gender) {
        super(gender)
        this.name = name
    }

    introduce() {
        console.log("Hi, I'm " + this.name + '! '
                      + "I'm " + this.gender + ".")
    }

    inspect() {
        console.log("I'm a " + this.race + ".")
    }

}

const person = new Person("Sera", "F")
// person.introduce()
// person.inspect()

// export default person

const {name, gender} = person;
// console.log(name, gender)

const printObjName = ({name}) => {
    console.log(name)
}

printObjName(person)