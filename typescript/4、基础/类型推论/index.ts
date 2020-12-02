// 没有申明类型，但是赋了初始值，则会根据类型推论的规则推断出一个类型
// let myFavoriteNumber = 'seven'; // 推论为string
// myFavoriteNumber = 7; // 编译报错

// 同
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;