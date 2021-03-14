function concat(arr, ...args) {
	// 声明一个空数组
	let result = []
	result = [...arr]
	// 遍历数组
	args.forEach(item => {
		// 判断 item 是否是数组
		if (Array.isArray(item)) {
			result.push(...item)
		} else {
			result.push(item)
		}
	})
	return result
}