// 函数类型 Function Types
// 为函数定义类型 typing the function
function add(x: number, y: number): number {
    return x + y
}

const myAddF1 = function (x: number, y: number): number {
    return x + y
}

// 书写完整函数类型(参数类型 和 返回值类型)(Writing the function type)
let myAddF2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}

// 我们以参数列表的形式写出参数类型，为每个参数指定一个名字和类型。这个名字只是为了增加可读性
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确
let myAddF3: (baseValue: number, increment: number) => number = function (x: number, y: number): number {
    return x + y
}


// 推断类型(Inferring the types)
// myAddF4 has the full function type
let myAddF4 = function (x: number, y: number): number {
    return x + y
}
// the parameters 'x' and 'y' have the type number
let myAddF5: (x: number, y: number) => number = function (x, y) {
    return x + y
}
