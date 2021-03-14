function slice(arr, begin, end) {
	// 如果arr.length = 0
	if (arr.length === 0) {
		return []
	}
	// 判断begin
	begin = begin || 0
	// 判断 begin >= arr.length
	if (begin >= arr.length) {
		return []
	}
	// 判断end
	end = end || arr.length
	if (end < begin) {
		end = arr.length
	}
	// 声明一个空数组
	let result = []
	// 遍历
	for (let i = 0; i < arr.length; i++) {
		if (i >= begin && i < end) {
				result.push(arr[i])
		}
	}
	return result
}