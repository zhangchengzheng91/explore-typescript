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
// 默认情况下，从 0 开始为元素编号。你也可以手动的指定成员的数量。例如，我们将上面的例子改成从 1 开始编号

enum Color { Red, Green, Blue }
let c: Color = Color.Green // 1
let colorName: string = Color[2] // Blue

// 任意值
// 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。这些值可能来自于动态的内容，比如来自用户的输入或第三方代码库。这种情况下，我们不希望类型检查器对这些值进行检查而是直接让他们通过编译阶段的检查，那么我们可以使用 any 类型来标记这些变量

let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false

let listAny: any[] = [1, true, 'free']
listAny[1] = true

// 空值
// 从某种类型上来说，void 类型与 any 类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 void

function warnUser(): void {
    console.log('this is my warning message');
}

// 声明一个 void 类型的变量没有什么大用，因为你只能为他赋予 null （只在 --strictNullCkecks 未指定时）和 undefined

let  unusable: void = undefined

// Null 和 undefined
// TypeScript 里，undefined 和 null 两者各自有自己类型分别叫做 undefined 和 null。和 void 相似，它们的本身的类型用处不是很大

let u: undefined = undefined
let n: null = null

// 默认情况下 null 和 undefined 是所有类型的子类型。就是说你可以把 null 和 undefined 赋值给 number 类型的变量

// 然而，当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 any 和他们各自的类型（有一个例外是 undefined 还可以赋值给 void 类型）。这能避免很多常见的问题。也许在某处你想传入一个 string 或 null 或 undefined，你可以使用联合类型 string | null | undefined.

// Never
// never 类型表示的是那些永远不存在的值的类型。例如，never 类型是那些总是会抛出异常或者根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；变量也可能是 never 类型，当他们被永不为真的类型保护所约束时。
// never 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 never 的子类型或可以赋值给 never 类型（除 never 本身之外）。即使 any 也不可以赋值给 never。

// 返回 never 的函数必须存在无法抵达的终点
function error(message: string): never {
    throw new Error(message)
}

// 推断的返回值类型为 never
function fail() {
    return error('Something failed')
}

// 返回 never 的函数必须存在无法抵达的终点
function infniteLoop(): never {
    while (true) {

    }
}

// Object
// object 表示非原始类型，也就是除 number、string、boolean、bigint、symbol、null 或 undefined 之外的类型。
// 使用 object 类型，就可以更好的表示像 object.create 这样的 API
// declare function create(o: object | null): void;
//
// create({ prop: 0})
// create(null)

// 类型断言
// 有时候你会遇到这样的情况，你会比 Typescript 更了解某个值的详细信息。通常这回发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
// 通过类型断言这种方式可以告诉编译器，"请相信我，我知道自己在干什么"。类型断言好比其他语言里的类型转换。但是不进行特殊的数据检查和解构。它没有运行时的影响，只在编译阶段起作用。Typescript 会假设，程序员，已经进行了必须的检查。

let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
console.log('strLength=', strLength)

let someValue2: any = 5
let strLength2: number = (someValue2 as string).length
console.log('strLength2=', strLength2)
