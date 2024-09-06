import { InferencePriority } from "typescript";

//1)泛型函数
function identity<T>(arg : T):T{
    return arg;
}

//使用泛型函数
let output1 = identity<string>("Hello TypeScript!");// 明确指定 T 为 string
let output2 = identity<number>(42);// 明确指定 T 为 number

console.log(output1);
console.log(output2);

//2)泛型接口
interface Pair <T, U>{
    first : T;
    second : U;
}

//使用泛型接口
let pair1 : Pair<string, number> = {first : "One" , second : 1};
let pair2 : Pair<boolean , string> = { first : true , second : "True"};

console.log(pair1);
console.log(pair2);



//3)泛型类
class GenericNumber<T>{
    zeroValue : T;
    add : (x :  T ,y : T) => T;

    constructor(zeroVaule : T , addFn : ( x: T , y :T) => T){
        this.zeroValue = zeroVaule;
        this.add = addFn;
    }
}

//使用泛型类
let myGenericNumber = new GenericNumber<number>(0 , (x ,y) => x + y);
console.log(myGenericNumber.add(5,10));

let myGenericString = new GenericNumber<string>("",(x,y) => x + y);
console.log(myGenericString.add("Hello,","World!"));



//4)泛型约束
//定义一个具有泛型约束的接口
interface Lengthwise {
    length : number;
}

//泛型函数,要求T必须有length属性
function logLength<T extends Lengthwise>(arg :T) : T{
    console.log(arg.length);
    return arg;
}

//使用泛型函数
logLength("Hello TypeScript!");
logLength([1,2,3]);
logLength({ length:10 , value : 42});


//5)泛型默认类型
function creatrArray<T = string>(length : number , value : T):T[] {
    return Array (length).fill(value);
}

//使用泛型函数
let stringArray = creatrArray(3 , "Hello");
let numberArray = creatrArray<number>(3 , 42);

console.log(stringArray);
console.log(numberArray);


