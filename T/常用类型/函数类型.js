"use strict";
//普通函数
function fun1() {
    console.log('这是一个普通函数');
}
//箭头函数
const fun2 = () => {
    console.log('这是一个箭头函数');
};
//如果函数返回字符串，就用string 代替    v
const fun3 = (name) => {
    return `姓名 : ${name}`;
};
//函数的参数可能是动态的。如果某个参数为必传，某个参数为非必传，此时就需要一个非必传标记。标记方法是在参数名后面加上“？”
const fun4 = (name, tag) => {
    return tag || '' + name;
};
fun4('你好');
fun4('你好', '世界');
//变量指定函数类型
//声明变量
var fun5;
//赋值函数
fun5 = (arg1, arg2) => arg1 + arg2 || '';
//绑定类型
var fun6 = (name, tag) => {
    return name + tag;
};
