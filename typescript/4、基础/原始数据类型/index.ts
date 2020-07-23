// boolean
let isDone: boolean = false; // boolean类型定义
// new Boolean(1) 得到的是一个对象 Boolean{true}
// 构造函数Boolean创建的对象不是 boolean类型
let createdByNewBoolean: boolean = new Boolean(1);
// 直接调用Boolean(1)可以返回一个boolean值
let createdByBoolean: boolean = Boolean(1);

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d; // 16进制
// es6中的二进制表示法
let binaryLiteral: number = 0b1010;
// es6中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;