"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//为变量 student 赋值时必须遵循StudentTyp 类型的规定，不规范的一律报错
const student = {
    id: 1,
    name: '小明',
    desc: '三好学生',
};
const citys = {
    tag: '高校',
    list: [
        {
            value: 1,
            label: '清华大学',
        },
        {
            value: 2,
            label: '北京大学',
        },
    ],
};
console.log(citys);
