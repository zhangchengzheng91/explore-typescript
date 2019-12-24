// 类
class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public mideleInitial: string,
        public lastName: string
    ) {
        this.fullName = `${firstName} ${mideleInitial} ${lastName}`
    }
}

interface Person {
    firstName: string,
    lastName: string,
}

function greeter(person: Person) {
    return `hello, ${person.firstName} ${person.lastName}`
}

const user = new Student("Jane", "M", "User")

console.log(greeter(user));
