// boolean
var isDone = false; // boolean类型定义
// new Boolean(1) 得到的是一个对象 Boolean{true}
// 构造函数Boolean创建的对象不是 boolean类型
var createdByNewBoolean = new Boolean(1); // 该句在编译的时候会报错
// 直接调用Boolean(1)可以返回一个boolean值
var createdByBoolean = Boolean(1);
// number
var decLiteral = 6;
var hexLiteral = 0xf00d; // 16进制
// es6中的二进制表示法
var binaryLiteral = 10; // es6 编译后十进制
// es6中的八进制表示法
var octalLiteral = 484; // es6 编译后十进制
var notANumber = NaN;
var infinityNumber = Infinity;
// string
var myName = 'Tom';
// 模板字符串
var sentence = "Hello my name is " + myName; // es6 编译后es5
// 空值
// void表示函数没有任何值返回
function alertName() {
    alert('My name is Tom');
}
// Null和Undefined
var u = undefined;
var n = null;
// null和undefined是所有类型的子类型
var num = undefined;
var u1;
var num1 = u1;
