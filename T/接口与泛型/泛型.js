"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1)泛型函数
function identity(arg) {
    return arg;
}
//使用泛型函数
let output1 = identity("Hello TypeScript!"); // 明确指定 T 为 string
let output2 = identity(42); // 明确指定 T 为 number
console.log(output1);
console.log(output2);
//使用泛型接口
let pair1 = { first: "One", second: 1 };
let pair2 = { first: true, second: "True" };
console.log(pair1);
console.log(pair2);
//3)泛型类
class GenericNumber {
    constructor(zeroVaule, addFn) {
        this.zeroValue = zeroVaule;
        this.add = addFn;
    }
}
//使用泛型类
let myGenericNumber = new GenericNumber(0, (x, y) => x + y);
console.log(myGenericNumber.add(5, 10));
let myGenericString = new GenericNumber("", (x, y) => x + y);
console.log(myGenericString.add("Hello,", "World!"));
//泛型函数,要求T必须有length属性
function logLength(arg) {
    console.log(arg.length);
    return arg;
}
//使用泛型函数
logLength("Hello TypeScript!");
logLength([1, 2, 3]);
logLength({ length: 10, value: 42 });
//5)泛型默认类型
function creatrArray(length, value) {
    return Array(length).fill(value);
}
//使用泛型函数
let stringArray = creatrArray(3, "Hello");
let numberArray = creatrArray(3, 42);
console.log(stringArray);
console.log(numberArray);
