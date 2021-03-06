function map(arr, callback) {
	// 声明一个空数组
	let result = new Array()
	// 遍历数组
	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i], i))
	}
	return result
}

// 测试
const arr = new Array(1, 2, 3, 4, 5)
const result = map(arr, (item, index) => {
	return item * 10
})
console.log(result)