function reduce(arr, callback, initValue) {
	let result = initValue
	// 执行回调
	for (let i = 0; i < arr.length; i++) {
		result = callback(result, arr[i])
	}
	return result
}


// 测试
let arr= [1, 2, 3, 4, 5]
let result = reduce(arr, function(res, value) {
	return res + value
}, 0)
console.log(result)
