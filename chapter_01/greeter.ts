// function greeter() {
//     return 'Hello'
// }
//
// let user = ['jane User']
//
// const gre = greeter()

// console.log('gre=', gre)

// interface Person {
//    firstName: string;
//    lastName: string;
// }
//
// function greeter(person: Person) {
//     return 'hello, ' + person.firstName + ' ' + person.lastName
// }
//
// let user = {
//     firstName: 'Jane',
//     lastName: 'User'
// }
//
// console.log('inner=', greeter(user))
// document.body.innerHTML = greeter(user)


class Student {
    fullName: string;
    // 构造函数的参数上使用public等同于创建了同名的成员变量
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string,
    ) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName
    }
}

interface Person {
    firstName: string;
    lastName: string;
    middleInitial: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.middleInitial + ' ' + person.lastName
}

let student = new Student('Jane', 'M.', 'User')

document.body.innerHTML = greeter(student)
