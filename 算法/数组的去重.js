let arr = [12, 23, 12, 15, 25, 23, 24, 25, 14, 19, 12]

/*  
  方式1: 通过Es6的 Set数据结构 
  - new Set 返回的是Set实例, 需要转为数组
    1.通过Es6扩展运算符展开将set转为为数组
    2.通过Es6的 Array.from()将set转为为数组
*/

let set = new Set(arr) 
// let arrRes = [...set]
let arrRes1 = Array.from(set)
console.log(arrRes1)

/*
  方式2: map/forEach加includes
*/
let arrRes2 = []
arr.map(item => {
  if (!arrRes2.includes(item)) {
      arrRes2.push(item)
  }
})
console.log(arrRes2)

/*
  方式3: 键值对方式
*/
let objRes = {}
let arrRes3 = []
arr.map((item, index) => {
  objRes[item] = index
})
// Object.keys(objRes).map(key => {
//   arrRes3.push(Number(key))
// })
for (key in objRes) {
  arrRes3.push(Number(key))
}
console.log(arrRes3)
