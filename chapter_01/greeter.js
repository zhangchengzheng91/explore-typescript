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
var Student = /** @class */ (function () {
    // 构造函数的参数上使用public等同于创建了同名的成员变量
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.middleInitial + ' ' + person.lastName;
}
var student = new Student('Jane', 'M.', 'User');
document.body.innerHTML = greeter(student);
