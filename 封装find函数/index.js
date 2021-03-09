function find(arr, callback) {
	// 遍历
	for(let i =0; i <arr.length; i++) {
		// 执行回调
		let res = callback(arr[i], i)
		if (res) {
			// 返回当前正在遍历的函数
			return arr[i]
		}
	}
	// 如果没有遇到满足添加的 返回 undefined
	return undefined
}