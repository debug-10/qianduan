import { couldStartTrivia } from "typescript"

//id和name 是必需的，值类型分别是number和string；desc 是可选的，值类型是 string
interface StudentType {
    id: number
    name : string
    desc?: string
}

//为变量 student 赋值时必须遵循StudentTyp 类型的规定，不规范的一律报错
const student : StudentType = {
    id : 1,
    name : '小明',
    desc : '三好学生',
}

//interface 类型也支持多层嵌套以满足丰富的数据格式的需求
interface BaseType {
    value : number
    label : string
}

interface ListType {
    tag : string
    list : BaseType[]
}

const citys : ListType = {
    tag : '高校',
    list : [
        {
            value : 1 ,
            label : '清华大学',
        },
        {
            value : 2,
            label : '北京大学',
        },
    ],
}
console.log(citys);
