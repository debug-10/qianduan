//from()对象转数组

// let obj = {
//     1:'a',
//     1:'b',
// }

// let arrs = Array.from(obj)
// console.log(arrs)

// flat()数组扁平化
// let arrs = [1,2,[3,4,[5]] ]
// arrs = arrs.flat(3)
// console.log(arrs)


//sort:排序
let arrs = [3,4,2,8,5]
let res = arrs.sort((e1,e2) => {
    return e2 - e1
})

console.log(res)
