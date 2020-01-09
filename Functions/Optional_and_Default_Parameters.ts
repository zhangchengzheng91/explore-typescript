// 可选参数和默认参数(Optional and Default Parameters)
// TypeScript 里的每个参数都是必须的。编译器检查用户是否为每个参数都传入了值。编译器还会假设只有这些参数会被传递进函数。
// 传递给一个函数的参数个数必须与函数期望的参数个数一致

function buildName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName
}

let result1 = buildName('Bob') // Expected 2 arguments, but got 1
let result2 = buildName('Bob', 'Adams', 'Sr.') // Expected 2 arguments, but got 3
let result3 = buildName('Bob', 'Adams')

// 在 TypeScript 里，我们可以在参数名旁使用 ? 实现可选参数的功能
// ** 可选参数必须放在必须参数的后面 **
function buildName1(firstName: string, lastName?: string): string {
    if (lastName)
        return firstName + ' ' + lastName
    else
        return firstName
}

let result11 = buildName1('Bob')
let result12 = buildName1('Bob', 'Adams', 'Sr.') // Expected 1-2 arguments, but got 3
let result13 = buildName1('Bob', 'Adams')

// 在 TypeScript 里，我们也可以为参数提供一个默认值。当用户传递这个参数或传递的值是 undefined 时。
// ** 所有必选参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数时可以省略 **
// 可选参数和末尾的默认参数共享参数类型
function buildName2(firstName: string, lastName = 'Smith'): string {
    if (lastName)
        return firstName + ' ' + lastName
    else
        return firstName
}

let result21 = buildName2('Bob')
let result22 = buildName2('Bob', undefined)
let result23 = buildName2('Bob', undefined, 'Sr.') // Expected 1-2 arguments, but got 3
let result24 = buildName2('Bob', 'Adams')
