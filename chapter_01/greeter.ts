// 类型注解 string
function greeter(person: string) {
    return 'hello, ' + person
}

const user = 'world'

document.body.textContent  = greeter(user)
