function filter(srr, callback) {
	// 声明空数组
	let  result = []
	for (let i = 0; i < arr.length; i++) {
		// 执行回调
		let res = callback(arr[i], i)
		// 判断
		if (res) {
			result.push(arr[i])
		}
	}
	return result
}




// 测试
let arr = [1, 2, 3, 4, 5]
let result = filter(arr, item => item % 2 === 0)
console.log(result)