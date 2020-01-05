// var 声明
var a = 10
function f() {
    var message = "hello world"

    return message
}

function f1() {
    var a = 10
    return function g() {
        var b = a + 1
        return b
    }
}

var g = f1()
g() // 11
// console.log('g()=', g())

function f2() {
    var a = 1
    a = 2
    var b = g()
    var a = 3
    return b
    
    function g() {
        return a
    }
}

f2()
console.log('f2()=', f2())

