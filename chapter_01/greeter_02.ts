// 接口 interface
interface Person {
    firstName: string,
    lastName: string,
}

function greeter(person: Person) {
    return `hello, ${person.firstName} ${person.lastName}`
}

const user = {
    firstName: 'Jane',
    lastName: 'User',
}

console.log(greeter(user));
