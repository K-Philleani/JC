function chunk(arr, size = 1) {
	if (arr.length === 0) {
		return []
	}
	// 声明两个变量
	let result = []
	let tmp = []
	// 遍历
	arr.forEach(item => {
		// 判断tmp元素的长度是否为0
		if (tmp.length === 0) {
			// 将tmp压入到result中
			result.push(tmp)
		}
		// 将元素压入到历史数组tmp中
		tmp.push(item)
		if (tmp.length === size) {
			tmp = []
		}
	})
	return result
}