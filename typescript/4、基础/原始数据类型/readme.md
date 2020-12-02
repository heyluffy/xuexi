## 原始数据类型
js的类型
* 原始数据类型
	* boolean(布尔值)
	* number(数值)
	* string
	* null
	* undefined
	* symbol(es6新特性)
* 对象类型

### 原始数据类型在ts中的应用
**boolean**
```
	new Boolean(1) // 得到的是一个Boolean对象 Boolean{true}
	Boolean(1) // 得到的是一个布尔值 true
```
* **boolean**布尔值
* **Boolean**构造函数 **new Boolean()** 布尔对象
* **布尔值不等于布尔对象**
* **Boolean(1)**可以得到布尔值

string和String
number和Number
也是同理

```
	let isDone: boolean; // 该定义是希望一个布尔值
```

**number**
```
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d; // 16进制
// es6中的二进制表示法
let binaryLiteral: number = 0b1010;
// es6中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
```
* 0x 十六进制
* 0b 二进制 （es6）
* 0o 八进制 （es6）
* NaN 非数值
* Infinity 无穷大

ts支持es6、es7、es8，在编译后会转成es5
二进制和八进制是es6，所以编译后转成十进制


**string**
```
// string
let myName: string = 'Tom';
// 模板字符串
let sentence = `Hello my name is ${ myName }`; // es6 编译后es5
```
模板字符串

**空值**
```
// void表示函数没有任何值返回
function alertName(): void {
  alert('My name is Tom');
}
```
**Null和Undefined**
```
// Null和Undefined
let u: undefined = undefined;
let n: null = null;

// null和undefined是所有类型的子类型
let num: number = undefined;
let u1: undefined;
let num1: number = u1;
```



