/*
  方式一: 冒泡排序(升序)
*/
let arr = [12, 8, 24, 16, 1]

function bubble(arr) {
  let temp = null
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}
console.log(bubble(arr))

/*
  方式一: 插入排序(升序)
*/
let arr2 = [12, 8, 24, 16, 1]
function insert(arr) {
  let sortedArr = []
  sortedArr.push(arr[0])
  for (let i = 1; i < arr.length; i++) {
    let A = arr[i]
    for (let j = sortedArr.length - 1; j >= 0; j--) {
      let B = sortedArr[j]
      if (A > B) {
        sortedArr.splice(j+1, 0, A)
        break
      }
      if (j === 0) {
        sortedArr.unshift(A)
      }
    }
  }
  return sortedArr
}
console.log(insert(arr2))

/*
  快速排序(升序)
*/

let arr3 = [12, 8, 24, 16, 1]

function quick(arr) {
  if (arr.length < 1) return arr
  let middleIndex = Math.floor(arr.length / 2)
  let middlevalue = arr.splice(middleIndex, 1)[0]
  let leftArr = []
  let rightArr = []
  for (let i = 0; i < arr.length; i++) {
    arr[i] < middlevalue ? leftArr.push(arr[i]) : rightArr.push(arr[i])
  }
  return quick(leftArr).concat(middlevalue, quick(rightArr))
}
console.log(quick(arr3))