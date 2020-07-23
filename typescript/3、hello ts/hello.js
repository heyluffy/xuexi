// function sayHello(person: string) { // ts中使用:来的定义类型
//   return 'Hello, ' + person;
// }
// let user = 'Tom';
// console.log(sayHello(user));
/*
  1 终端执行tsc hello.ts会编译出一个hello.js文件
  2 会发现生成的js文件中并没有额外的检查类型的代码被插入，是因为
    ts只会在编译的时候对类型进行静态检查，有错误编译的时候就会报错
    如果需要在运行时检查，需要手动对类型进行判断
*/
function sayHello(person) {
    if (typeof person === 'string') {
        return 'Hello, ' + person;
    }
    else {
        throw new Error('person is not a string');
    }
}
var user = 'Tom';
sayHello(user);
