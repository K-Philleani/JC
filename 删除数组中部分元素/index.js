function pull(arr, ...args) {
	// 声明一个空数组 保存删掉的元素
	let result = []
	// 遍历
	for (let i = 0; i < arr.length; i++) {
		// 判断当前元素是否存在于args中
		if (args.includes(arr[i])) {
			result.push(arr[i])
			arr.splice(i, 1)
			// 将当前元素的值存入到result
			i--
		}
	}
	return result
}