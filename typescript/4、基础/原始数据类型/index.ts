// boolean
let isDone: boolean = false; // boolean类型定义
// new Boolean(1) 得到的是一个对象 Boolean{true}
// 构造函数Boolean创建的对象不是 boolean类型
let createdByNewBoolean: boolean = new Boolean(1); // 该句在编译的时候会报错
// 直接调用Boolean(1)可以返回一个boolean值
let createdByBoolean: boolean = Boolean(1);

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d; // 16进制
// es6中的二进制表示法
let binaryLiteral: number = 0b1010; // es6 编译后十进制
// es6中的八进制表示法
let octalLiteral: number = 0o744; // es6 编译后十进制
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

// string
let myName: string = 'Tom';
// 模板字符串
let sentence = `Hello my name is ${ myName }`; // es6 编译后es5

// 空值
// void表示函数没有任何值返回
function alertName(): void {
  alert('My name is Tom');
}

// Null和Undefined
let u: undefined = undefined;
let n: null = null;

// null和undefined是所有类型的子类型
let num: number = undefined;
let u1: undefined;
let num1: number = u1;
