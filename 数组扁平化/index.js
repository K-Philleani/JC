function flatten(arr) {
	// 声明一个空数组
	let result = []
	// 遍历数组
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten(arr[i]))
		} else {
			result = result.concat(arr[i])
		}
	}
	return result
}


function flatten1(arr) {
	// 声明数组
	let result = [...arr]
	// 循环判断
	while (result.some(item => Array.isArray(item))) {
		result = [].concat(...result)
	}
	return result
}