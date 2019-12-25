// 布尔值 Boolean
let isDone: boolean = false

// 数字 Number
// 和 Javescript 一样，TypeScript 里的所有数字都是浮点数。
let decLiteral: number = 6 // 十进制
let hexLiteral: number = 0xf00d // 十六进制
let binaryLiteral: number = 0b1010 // 二进制
let octalLiteral: number = 0o744 // 八进制

// 字符串 String
let name1: string = "Bob"
name1 = 'Smith'

// 支持模版字符串
let name2 = 'Gene'
let age: number = 37
let sentence: string = `
    hello, my name is ${name2}
    I'll be ${age + 1} years old next month
`

console.log('sentence=', sentence);

// 数组 []
let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// 元祖 Tuple
// 元组类型允许表示一个已知元素【数量】和【类型】的数组，各元素的类型不必相同。
let x:[string, number]
x = ['hello', 10]
// x = [10, 'hello'] Error
console.log(x[0].substr(1));
// console.log(x[1].substr[1]); Error
// x[3] = 'words' Error

// 枚举 Enum
// enum 类型是对 JavaScript 标准数据类型的一个补充。像 C# 等其他语言一样，使用枚举类型可以为一组数值赋予有好的名字

enum Color { Red, Green, Blue }
let c: Color = Color.Green
