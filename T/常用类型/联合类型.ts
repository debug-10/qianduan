//联合类型用符号“|”将多个类型连接起来
var val1: string | number
var val2: object |null = null

var val3: string | number = 123
console.log(val3.toString());
//错误的,number类型不存在length属性
//console.log(val3.length());

//可以为变量“强制指定某个类型”，这种方式叫作类型断言。类型断言是通过关键字as来实现的
let val4: unknown = 'this is a string '
let atrLength : number = (val4 as string).length 

