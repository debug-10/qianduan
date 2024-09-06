var foods ={
    best: '小龙虾',
    good: '火锅',
    normal: '快餐',
    bad: '方便面',
}

// 获取foods中的best和bad
// var best = foods.best
// var bad = foods.bad

//解构赋值
var{ best,bad } = foods
console.log('best',best)
console.log('bad',bad)

var{best : best1,bad :bad1,hello}=foods
console.log(best1)
console.log(bad1)
console.log(hello)

// const address ={
//     city:{
//      name:'南京市'
//      area:{
//         name:'栖霞区'，
//         school:{
//             name:'南工'
//             },
//         },
//     },
// }

//嵌套的解构赋值
// let{
//     city:{
//         name:cityName,
//         area:{
//             name:areaName,
//             school:{
//                 name:schoolName
//             }
//         }
//     }
// }