// 任意值类型 可以改变赋值类型
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 任意值上访问任何属性和方法都是允许的
// 可以认为对任意值的任何操作都返回任意值
// 未声明类型并且没有初始化的变量会 被识别为任意值
let anyThing: any = 'hello';
console.log(anyThing.myName);
console.log(anyThing.myName.myFirstName);

anyThing.getName();
anyThing.getName().getFirstName();
anyThing.myName.getName().getFisrtName();

// 未声明类型的变量
// let anyTing1;
// anyTing1 = 1;
// anyTing1 = 'aaa';

// 等价于
let anyTing1: any;
anyTing1 = 1;
anyTing1 = 'aaa';

